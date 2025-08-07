"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Check } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"

const FormSchema = z.object({
  sermon: z.string().nonempty({ message: "Please select a sermon" }),
})

type Sermon = {
  id: string
  title: string
  preacher: string
  date: string
  category: string
  thumbnail: string
  audioUrl: string
}

interface SermonSearchProps {
  sermons: Sermon[]
  onSelect: (sermonId: string) => void
}

export function SermonSearch({ sermons, onSelect }: SermonSearchProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const [open, setOpen] = useState(false)

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    onSelect(data.sermon)
    setOpen(false) // Close dropdown on submit
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center justify-between md:w-xl w-xs bg-accent rounded-full p-2 flex-wrap gap-5 max-md:rounded-xl"
      >
        <FormField
          control={form.control}
          name="sermon"
          render={({ field }) => (
            <FormItem>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "justify-between cursor-pointer border-none rounded-full bg-transparent",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? sermons.find((s) => s.id === field.value)?.title
                        : "Check out enlightening sermons"}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="self-start p-0">
                  <Command>
                    <CommandInput placeholder="Search sermon..." className="h-9" />
                    <CommandList>
                      <CommandEmpty>No sermon found</CommandEmpty>
                      <CommandGroup>
                        {sermons.map((sermon) => (
                          <CommandItem
                            value={sermon.title}
                            key={sermon.id}
                            onSelect={() => {
                              form.setValue("sermon", sermon.id)
                              setOpen(false) // Close dropdown on selection
                            }}
                            className="cursor-pointer"
                          >
                            {sermon.title}
                            <Check
                              className={cn(
                                "ml-auto",
                                sermon.id === field.value ? "opacity-100" : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="rounded-full cursor-pointer bg-blue-500 hover:bg-blue-500 text-white"
        >
          Search
        </Button>
      </form>
    </Form>
  )
}