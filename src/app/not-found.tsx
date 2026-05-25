"use client";

import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <main className="min-h-screen w-full flex items-center justify-center py-32 px-6 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl"
        >
          <Card className="rounded-2xl bg-accent border-none shadow-none">
            <CardContent className="flex flex-col items-center text-center gap-6 py-16 px-6">
              {/* 404 */}
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-primary">
                404
              </h1>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-semibold">
                Page not found
              </h2>

              {/* Description */}
              <p className="text-muted-foreground max-w-md text-sm md:text-base">
                This page may not be here, but you’re never lost. Let’s guide
                you back to where you need to be.
              </p>

              {/* Actions */}
              <Link href="/">
                <Button className="flex items-center gap-2 bg-[#0A42D0] hover:bg-[#0A42D0]/90 px-6 cursor-pointer">
                  <Home size={16} />
                  Go Home
                </Button>
              </Link>

              {/* ✨ Optional hint */}
              <p className="text-xs text-muted-foreground mt-4">
                If you believe this is an error, please contact support.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;
