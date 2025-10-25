import Loader from "@/components/reuseable/Loader";
import ScrollToTop from "@/components/reuseable/ScrollToTop";

export default function Loading() {
  return (
    <ScrollToTop>
      <Loader />;
    </ScrollToTop>
  );
}
