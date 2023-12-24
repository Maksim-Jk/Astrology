import React from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import style from "./style.module.css";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { SubmitHandler, useForm } from "react-hook-form";
import { TypographyH1 } from "@/components/ui/Typography/TypographyH1";

const formSchema = z.object({
  horoscopeType: z.enum(["zodiac"]),
  zodiacSign: z.enum([
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
  ]),
  gender: z.enum(["male", "female", "other"]),
});

export const CreateHoroscope = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      horoscopeType: "zodiac",
      zodiacSign: "aries",
      gender: "male",
    },
  });

  const handleSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) => console.log(data);

  return (
    <div className={style.createHoroscope}>
      <TypographyH1>Create Horoscope</TypographyH1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className={style.form}>
          <FormField
            control={form.control}
            name="horoscopeType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Horoscope Type Selection</FormLabel>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a horoscope type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="zodiac">zodiac</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zodiacSign"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zodiac Sign Selection</FormLabel>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a zodiac sign" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aries">aries</SelectItem>
                      <SelectItem value="taurus">taurus</SelectItem>
                      <SelectItem value="gemini">gemini</SelectItem>
                      <SelectItem value="cancer">cancer</SelectItem>
                      <SelectItem value="leo">leo</SelectItem>
                      <SelectItem value="virgo">virgo</SelectItem>
                      <SelectItem value="libra">libra</SelectItem>
                      <SelectItem value="scorpio">scorpio</SelectItem>
                      <SelectItem value="sagittarius">sagittarius</SelectItem>
                      <SelectItem value="capricorn">capricorn</SelectItem>
                      <SelectItem value="aquarius">aquarius</SelectItem>
                      <SelectItem value="pisces">pisces</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender Selection</FormLabel>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="female">female</SelectItem>
                      <SelectItem value="male">male</SelectItem>
                      <SelectItem value="other">other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className={style.button}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};
