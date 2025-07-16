import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        // secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        primary: "bg-gradient-to-b from-[#75FF5B] via-primary to-[#157902] text-primary-foreground text-2xl border-b-3 border-r-3 border-[#0C4501]",
        secondary: "bg-gradient-to-b from-[#B9F3FF] via-secondary to-[#278FA4] text-secondary-foreground text-2xl border-b-3 border-r-3 border-[#0B3943]",
        accent: "bg-gradient-to-b from-[#FFAAD4] via-accent to-[#892A59] text-secondary-foreground text-2xl border-b-3 border-r-3 border-[#480E2A]",
        beginner: "bg-gradient-to-b border-b-3 border-r-3 text-primary-foreground from-[#B3FF5D] via-[#82B943] to-[#527629] border-[#2C470C]",
        easy: "bg-gradient-to-b border-b-3 border-r-3 text-primary-foreground from-[#68EB6D] via-[#4CAF50] to-[#2D682F] border-[#18431A]",
        medium: "bg-gradient-to-b border-b-3 border-r-3 text-primary-foreground from-[#FFDE7C] via-[#FFC107] to-[#987200] border-[#614901]",
        hard: "bg-gradient-to-b border-b-3 border-r-3 text-primary-foreground from-[#FF845E] via-[#FF5722] to-[#9C300E] border-[#601D09]",
        impossible: "bg-gradient-to-b border-b-3 border-r-3 text-primary-foreground from-[#FF6358] via-[#F44336] to-[#A02117] border-[#510E09]",
        calculator_active: "bg-foreground text-background border-r-5 border-b-5 border-[#666666]",
        calculator_inactive: "bg-[#504B4B] text-foreground border-r-5 border-b-5 border-[#666666]",
        calculator_tip: "bg-[#66E5FF] text-background border-r-5 border-b-5 border-[#368494]",
        calculator_result: "bg-[#39FF14] text-background border-r-5 border-b-5 border-[#1C8F06]",
        calculator_delete: "bg-[#B11D1D] text-foreground border-r-5 border-b-5 border-[#5C0707]",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        menu: "w-45 h-12",
        difficulty: "w-56 h-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
