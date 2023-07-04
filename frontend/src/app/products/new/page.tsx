import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Logo from "../../../components/logo"
import NewProductForm from "@/components/NewProductForm";

export default function NewProductPage() {

    return (
        <>
            <Logo />
            <NewProductForm />
        </>
    )
}