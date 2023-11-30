import Image from "next/image";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <div className="bg-transparent flex justify-between items-center px-[40px] h-[90px] relative z-1">
      <Image
        src="/Neo2/vector/default-monochrome.svg"
        alt="logo"
        width={220}
        height={180}
        className="auto" // This pushes the image to the left

      />
      <div className="text-[#fff] text-[25px] ">
        <Button
          onClick={() => router.push("/")}
          sx={{
            width: "110px",
            mr: "1rem",
            borderRadius: "10px",
            color: "#fff",
            textTransform: "capitalize",
            fontWeight:'bold'
          }}
          variant="outlined"
        >
          Sign In
        </Button>
        {/* <Button
          onClick={() => router.push("/about-us")}
          sx={{
            width: "110px",
            borderRadius: "10px",
            color: "#fff",
            textTransform: "capitalize",
          }}
          variant="outlined"
        >
          About Us
        </Button> */}
      </div>
    </div>
  );
}
