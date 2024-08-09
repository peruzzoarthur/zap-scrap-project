import ImgCarousel from "@/components/custom/imgCarousel";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useGetJson } from "@/hooks/useGetJson";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/houses")({
  component: Houses,
});

function Houses() {
  const { json } = useGetJson();

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-4 mt-6">
        <h1>Casas | Centro | R$0-R$1400</h1>
        {json?.map((item) => {
          const address = item.listing.address;
          return (
            <Card className="w-[40rem] h-full p-2">
              <CardHeader>{`${address.street ?? ""}${address.streetNumber ? `, ${address.streetNumber}` : ""} `}</CardHeader>
              <h4>id: {item.listing.id}</h4>
              <CardDescription>
                {item.listing.description.replace(/<br\s*\/?>/gi, "\n")}
              </CardDescription>
              <ImgCarousel urlArray={item.medias.map((m) => m.url)} />
              <CardFooter className="mt-1">{item.account.name}</CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
}
