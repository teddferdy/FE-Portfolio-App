"use client";

import { useMemo } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import emailjs from "@emailjs/browser";
import { LuAsterisk } from "react-icons/lu";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

import Header from "@/components/Header";
import { useLoading } from "@/components/Loading";
import { useToast } from "@/hooks/use-toast";
import { useLocale } from "@/i18n/localProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getContact } from "@/service/contact";
import { getListService } from "@/service/service";

const PAGE_TRANSITION = { delay: 2.4, duration: 0.4, ease: "easeIn" };

const ICON = {
  Phone: <FaPhoneAlt />,
  Email: <FaEnvelope />,
  Address: <FaMapMarkedAlt />,
};

const createFormSchema = (t) =>
  z.object({
    firstName: z.string().min(2, t("Contact.errorFirstName")),
    lastName: z.string().min(2, t("Contact.errorLastName")),
    email: z.string().email(t("Contact.errorEmail")),
    description: z.string().min(4, t("Contact.errorDescrition")),
    phoneNumber: z.string().min(4, t("Contact.errorPhoneNumber")),
    category: z.string().min(1, t("Contact.errorService")),
  });

const Contact = () => {
  const { t } = useLocale();
  const { toast } = useToast();
  const { setActive } = useLoading();

  const formSchema = useMemo(() => createFormSchema(t), [t]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      description: "",
      category: "",
    },
  });

  const getContactData = useQuery({
    queryKey: ["getContact"],
    queryFn: getContact,
  });

  const getServiceData = useQuery({
    queryKey: ["getListService"],
    queryFn: getListService,
  });

  const handleInput = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  };

  const sendEmail = () => {
    setActive(true, null);
    const formElement = document.querySelector("form");

    emailjs
      .sendForm("service_jciernm", "template_b74phwa", formElement, {
        publicKey: "69-1dTBFPi2AH0Tcm",
      })
      .then(
        () => {
          setTimeout(() => {
            toast({ variant: "success", title: t("Contact.successSentEmail") });
          }, 1000);
          setTimeout(() => {
            setActive(null, null);
            form.reset();
          }, 2000);
        },
        (error) => {
          setTimeout(() => {
            toast({
              variant: "destructive",
              title: t("Contact.errorSentEmail"),
              description: error,
            });
          }, 1000);
          setTimeout(() => {
            setActive(null, null);
          }, 2000);
        },
      );
  };

  return (
    <>
      <Header />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: PAGE_TRANSITION }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-1 flex-col xl:flex-row gap-4">
            {/* Form */}
            <div className="flex flex-1 flex-col gap-6 order-1 xl:order-none w-full">
              <h3 className="text-4xl text-accent">{t("Contact.title")}</h3>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(sendEmail)}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-10 bg-[#272729] rounded-xl w-full"
                >
                  {/* First Name */}
                  <div className="col-span-1">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <div className="mb-4 flex items-center gap-2">
                            <FormLabel className="text-base">
                              {t("Contact.firstName")}
                            </FormLabel>
                            <LuAsterisk className="w-4 h-4 text-red-600" />
                          </div>
                          <Input
                            type="text"
                            {...field}
                            placeholder={t("Contact.placeHolderFirstName")}
                            className="w-full"
                          />
                          {form.formState.errors.firstName && (
                            <FormMessage>
                              {form.formState.errors.firstName.message}
                            </FormMessage>
                          )}
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Last Name */}
                  <div className="col-span-1">
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <div className="mb-4 flex items-center gap-2">
                            <FormLabel className="text-base">
                              {t("Contact.lastName")}
                            </FormLabel>
                            <LuAsterisk className="w-4 h-4 text-red-600" />
                          </div>
                          <Input
                            type="text"
                            {...field}
                            placeholder={t("Contact.placeHolderLastName")}
                            className="w-full"
                          />
                          {form.formState.errors.lastName && (
                            <FormMessage>
                              {form.formState.errors.lastName.message}
                            </FormMessage>
                          )}
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Email */}
                  <div className="col-span-1">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <div className="mb-4 flex items-center gap-2">
                            <FormLabel className="text-base">
                              {t("Contact.email")}
                            </FormLabel>
                            <LuAsterisk className="w-4 h-4 text-red-600" />
                          </div>
                          <Input
                            type="email"
                            {...field}
                            placeholder={t("Contact.placeHolderEmail")}
                            className="w-full"
                          />
                          {form.formState.errors.email && (
                            <FormMessage>
                              {form.formState.errors.email.message}
                            </FormMessage>
                          )}
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Phone */}
                  <div className="col-span-1">
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <div className="mb-4 flex items-center gap-2">
                            <FormLabel className="text-base">
                              {t("Contact.phoneNumber")}
                            </FormLabel>
                            <LuAsterisk className="w-4 h-4 text-red-600" />
                          </div>
                          <Input
                            type="text"
                            {...field}
                            placeholder={t("Contact.placeHolderPhoneNumber")}
                            className="w-full"
                            onInput={handleInput}
                          />
                          {form.formState.errors.phoneNumber && (
                            <FormMessage>
                              {form.formState.errors.phoneNumber.message}
                            </FormMessage>
                          )}
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Service */}
                  <div className="col-span-1 lg:col-span-2">
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <div className="mb-4 flex items-center gap-2">
                            <FormLabel className="text-base">
                              {t("Contact.Service")}
                            </FormLabel>
                            <LuAsterisk className="w-4 h-4 text-red-600" />
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <div>
                                <Input
                                  {...field}
                                  placeholder={t("Contact.placeHolderService")}
                                  readOnly
                                  className="w-full text-left cursor-pointer"
                                />
                              </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 h-60 overflow-scroll">
                              <DropdownMenuLabel>
                                {t("Contact.Service")}
                              </DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuRadioGroup
                                value={field.value}
                                onValueChange={(value) => field.onChange(value)}
                              >
                                {getServiceData.data?.data?.map((item) => (
                                  <DropdownMenuRadioItem
                                    key={item.name}
                                    value={item.name}
                                  >
                                    {item.name}
                                  </DropdownMenuRadioItem>
                                ))}
                              </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                          </DropdownMenu>
                          {form.formState.errors.category && (
                            <FormMessage>
                              {form.formState.errors.category.message}
                            </FormMessage>
                          )}
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Message */}
                  <div className="col-span-1 lg:col-span-2">
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <div className="mb-4 flex items-center gap-2">
                            <FormLabel className="text-base">
                              {t("Contact.message")}
                            </FormLabel>
                            <LuAsterisk className="w-4 h-4 text-red-600" />
                          </div>
                          <Textarea
                            {...field}
                            placeholder={t("Contact.placeholderMessage")}
                            maxLength={30}
                            className="w-full"
                          />
                          {form.formState.errors.description && (
                            <FormMessage>
                              {form.formState.errors.description.message}
                            </FormMessage>
                          )}
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button size="sm" className="max-w-40" type="submit">
                    {t("Contact.buttonSend")}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-[0.5] items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {getContactData.data?.map((item, index) => {
                  const isAddress = item.title === "General.address";
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{ICON[item.title]}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{t(item.title)}</p>
                        <h3 className="text-xl">
                          {isAddress ? t(item.description) : item.description}
                        </h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
