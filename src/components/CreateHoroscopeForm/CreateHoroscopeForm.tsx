import {
  Form,
  FormControl,
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
import { Button } from "@/components/ui/button";
import style from "./style.module.css";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { SubmitHandler, useForm } from "react-hook-form";

const formSchema = z.object({
  horoscopeType: z.enum(["zodiac", "love", "life"], {
    errorMap: () => ({ message: "Выберите тип гороскопа" }),
  }),
  zodiacSign: z.enum(
    [
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
    ],
    {
      errorMap: () => ({ message: "Выберите знак зодиака" }),
    }
  ),
  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({ message: "Выберите пол" }),
  }),
});

interface ICreateHoroscopeFormProps {
  setHoroscope: React.Dispatch<React.SetStateAction<string>>;
}

export const CreateHoroscopeForm: React.FC<ICreateHoroscopeFormProps> = ({ setHoroscope }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      horoscopeType: "zodiac",
    },
  });

  const handleSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
    const serverData = {
      horoscopeId: data.horoscopeType,
      signId: data.zodiacSign,
      genderId: data.gender,
    };
    setHoroscope(JSON.stringify(serverData, null, 2));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={style.form}>
        <FormField
          control={form.control}
          name="horoscopeType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Тип гороскопа</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип гороскопа" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="zodiac">Зодиакальный</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="zodiacSign"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ваш знак зодиака</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите знак зодиака" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="aries">Овен</SelectItem>
                  <SelectItem value="taurus">Телец</SelectItem>
                  <SelectItem value="gemini">Близнецы</SelectItem>
                  <SelectItem value="cancer">Рак</SelectItem>
                  <SelectItem value="leo">Лев</SelectItem>
                  <SelectItem value="virgo">Дева</SelectItem>
                  <SelectItem value="libra">Весы</SelectItem>
                  <SelectItem value="scorpio">Скорпион</SelectItem>
                  <SelectItem value="sagittarius">Стрелец</SelectItem>
                  <SelectItem value="capricorn">Козерог</SelectItem>
                  <SelectItem value="aquarius">Водолей</SelectItem>
                  <SelectItem value="pisces">Рыбы</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ваш пол</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите пол" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="male">Мужской</SelectItem>
                  <SelectItem value="female">Женский</SelectItem>
                  <SelectItem value="other">Другое</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className={style.button}>
          Создать гороскоп
        </Button>
      </form>
    </Form>
  );
};
