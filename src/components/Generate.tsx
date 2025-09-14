import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { Dock, Proportions } from "lucide-react";
import Image from "next/image";
import { generateTools } from "@/lib/generateTools";

const Generate = () => {
  return (
    <section className="px-6 pt-10 mx-auto w-full">
      <h3 className="text-lg font-semibold mb-2">Generate</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {generateTools.map((tool) => (
          <Card key={tool.title} className="hover:shadow-md transition py-2">
            <CardContent className="p-2 flex justify-between items-center">
              <div className="flex gap-2 items-center max-w-[250px]">
                <div className="h-12 w-12">
                  <Image
                    src={tool.src}
                    alt={tool.title}
                    width={48}
                    height={48}
                    className="w-full object-cover"
                  />
                </div>
                <div className="text-[13px] max-w-[175px]">
                  <div className="flex gap-2 items-center">
                    <h4 className="font-medium">{tool.title}</h4>
                    {tool.newTag && (
                      <Badge className="bg-blue-500 text-[13px]">New</Badge>
                    )}
                  </div>
                  <p className="text-[12px] leading-4">{tool.desc}</p>
                </div>
              </div>
              <Button size="sm" variant="ghost" className="px-2 text-[13px]">
                Open
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-between mt-7 pb-0.5">
        <h3 className="text-lg font-semibold">Gallery</h3>
        <div className="space-x-2 text-sm">
          <Button size={"sm"} variant="ghost">
            <Proportions /> Legal
          </Button>
          <Button size={"sm"} variant="ghost">
            <Dock /> Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Generate;
