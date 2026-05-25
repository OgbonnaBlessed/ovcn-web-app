"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

const Give = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedTab, setCopiedTab] = useState<"naira" | "international" | null>(
    null,
  );

  const handleCopy = (
    text: string,
    index: number,
    tab: "naira" | "international",
  ) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setCopiedTab(tab);
    setTimeout(() => {
      setCopiedIndex(null);
      setCopiedTab(null);
    }, 5000);
  };

  const naira = [
    { image: "/fidelity.png", bank: "FIDELITY BANK", number: "5600524355" },
    { image: "/fidelity.png", bank: "FIDELITY BANK", number: "7082979949" },
    { image: "/moniepoint.png", bank: "MONIEPOINT", number: "4001355562" },
  ];

  const international = [
    {
      image: "/fidelity.png",
      bank: "FIDELITY BANK - Dollar Account",
      number: "5250338766",
    },
    {
      image: "/fidelity.png",
      bank: "FIDELITY BANK - Pounds Account",
      number: "5250338797",
    },
    {
      image: "/fidelity.png",
      bank: "FIDELITY BANK - Pounds Account",
      number: "5250338780",
    },
  ];

  const renderCard = (
    data: { image: string; bank: string; number: string }[],
    tabName: "naira" | "international",
  ) =>
    data.map((n, i) => {
      const isCopied = copiedIndex === i && copiedTab === tabName;

      return (
        <Card key={i} className="shadow-none border-none relative">
          <CardHeader className="md:text-base text-sm">
            <div className="flex items-center gap-2">
              <Image
                src={n.image}
                width={40}
                height={40}
                quality={100}
                preload
                alt="Bank logo"
              />
              <CardTitle className="md:text-base text-sm">{n.bank}</CardTitle>
            </div>
            <CardDescription className="md:text-base text-sm">
              {tabName === "naira"
                ? "OMEGA VISION CHRISTIAN NETWORK"
                : "OMEGA VISION CHRISTIAN NETWORK GLOBAL SERVICES"}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex items-start md:gap-4 gap-1 relative">
            <p className="md:text-3xl text-xl font-bold tracking-widest">
              {n.number}
            </p>

            <button
              onClick={() => handleCopy(n.number, i, tabName)}
              className="transition-all duration-300 ease-in-out relative flex items-center justify-center"
            >
              <span
                className={clsx(
                  "absolute -top-6 text-xs font-medium text-blue-500 transition-opacity",
                  isCopied ? "opacity-100" : "opacity-0",
                )}
              >
                Copied!
              </span>
              {isCopied ? (
                <Check className="text-blue-500 p-1 transition-transform duration-300 scale-100" />
              ) : (
                <Copy className="text-gray-500 p-1 hover:text-blue-600 transition-transform duration-300 hover:scale-110 cursor-pointer" />
              )}
            </button>
          </CardContent>
        </Card>
      );
    });

  return (
    <Tabs
      defaultValue="naira"
      className="w-full flex flex-col gap-10 py-14 px-6 lg:p-20"
    >
      <div className="flex items-start md:items-center flex-col md:flex-row gap-5 md:gap-0 justify-between">
        <div className="w-full max-w-xl flex flex-col md:gap-2 gap-1">
          <h1 className="lg:text-5xl text-3xl font-bold w-full">
            Ways to Give
          </h1>
          <p className="text-sm md:text-base">
            Your tithe and offering - all in one place
          </p>
        </div>
        <TabsList className="bg-transparent flex items-center gap-2">
          <TabsTrigger value="naira">Naira</TabsTrigger>
          <TabsTrigger value="international">International</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent
        value="naira"
        className="grid md:grid-cols-2 grid-cols-1 gap-10 bg-blue-100 p-10 rounded-xl"
      >
        {renderCard(naira, "naira")}
      </TabsContent>

      <TabsContent
        value="international"
        className="grid md:grid-cols-2 grid-cols-1 gap-10 bg-blue-100 p-10 rounded-xl"
      >
        {renderCard(international, "international")}
      </TabsContent>
    </Tabs>
  );
};

export default Give;
