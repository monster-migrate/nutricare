"use client";

import React from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
  role: z.string().nonempty({ message: "Job position is required." }),
  name: z.string().nonempty({ message: "Full name is required." }),
  email: z
    .string()
    .email({ message: "Invalid email address." })
    .nonempty({ message: "Email address is required." }),
  phone: z
    .string()
    .nonempty({ message: "Phone number is required." })
    .regex(/^\d{10}$/, { message: "Invalid phone number." }),
  password: z
    .string()
    .nonempty({ message: "Password is required." })
    .min(6, { message: "Password must be at least 6 characters." })
    .regex(/[a-z]/, {
      message: "Password must include at least one lowercase letter.",
    })
    .regex(/[A-Z]/, {
      message: "Password must include at least one uppercase letter.",
    })
    .regex(/\d/, { message: "Password must include at least one number." }),
  address: z.string().nonempty({ message: "Address is required." }),
  resume: z.instanceof(File).optional(),
  notes: z.string().optional(),
});

const CareerPage: React.FC = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const formData = new FormData();

    // Append the resume file to formData
    if (data.resume) {
      formData.append("file", data.resume); // Assuming `data.resume` is the file object
    }

    try {
      // Step 1: Upload file and get signed URL
      const uploadResponse = await fetch("/api/fileupload", {
        method: "POST",
        body: formData,
      });

      const uploadResult = await uploadResponse.json();
      console.log("SignedUrl", uploadResult.url);
      if (uploadResult.error) {
        throw new Error(uploadResult.error);
      }

      const response = await fetch("/api/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            mutation Mutation($name: String!, $email: String!, $password: String!, $phone: String!, $role: UserRole!, $address: String, $resume: String, $notes: String) {
            createUser(name: $name, email: $email, password: $password, phone: $phone, role: $role, address: $address, resume: $resume, notes: $notes) {
              address
              createdAt
              email
              name
              notes
              password
              phone
              resume
              role
              updatedAt
            }
          }
          `,
          variables: {
            name: data.name as string,
            email: data.email as string,
            phone: data.phone as string,
            password: data.password as string,
            role: data.role as string,
            address: data.address as string,
            resume: uploadResult.url as string,
            notes: data.notes as string,
          },
        }),
      });

      const result = await response.json();

      if (result.errors) {
        console.error(result.errors);
        alert("Error creating user");
      } else {
        alert("User created successfully");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-semibold text-sky-600">
              Join Our Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Position</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a position" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Pantry">Pantry Staff</SelectItem>
                          <SelectItem value="Delivery">
                            Delivery Personnel
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          id="name"
                          {...field}
                          placeholder="Enter your full name"
                          className="mt-1 w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          id="email"
                          {...field}
                          placeholder="Enter your email address"
                          className="mt-1 w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          id="phone"
                          {...field}
                          placeholder="Enter your phone number"
                          className="mt-1 w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          id="password"
                          {...field}
                          placeholder="Enter password"
                          className="mt-1 w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Textarea
                          id="address"
                          {...field}
                          placeholder="Enter your complete address"
                          className="mt-1 w-full"
                          rows={2}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="resume"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Upload Resume</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          id="resume"
                          onChange={(e) =>
                            form.setValue(
                              field.name,
                              e.target.files ? e.target.files[0] : undefined
                            )
                          }
                          className="mt-1 w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Notes (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          id="notes"
                          {...field}
                          placeholder="Provide any additional information..."
                          className="mt-1 w-full"
                          rows={4}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <CardFooter className="flex justify-center">
                  <Button type="submit" className="bg-sky-500 w-full md:w-auto">
                    Submit Application
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CareerPage;
