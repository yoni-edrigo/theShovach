import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export function useImages() {
  // Fetch images with URLs from Convex
  const images = useQuery(api.images.getImagesWithUrls, {});
  // useQuery returns undefined while loading
  const isLoading = images === undefined;
  // Debugging logs
  console.log("useImages hook:", { images, isLoading });
  // Convex useQuery does not provide error directly; handle as needed
  return { images: images ?? [], isLoading };
}
