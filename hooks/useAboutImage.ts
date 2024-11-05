// usehook for image to be queried
import { useQuery } from "@tanstack/react-query";
import { getAboutImage } from "@/sanity/lib/api";

export function useAboutImage() {
  return useQuery({
    queryKey: ["aboutImage"],
    queryFn: getAboutImage,
  });
}
