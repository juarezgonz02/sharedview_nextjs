import Link from "next/link";
import Image from "next/image";
import NotFoundIMG from "../../../public/404 Error Page not Found with people connecting a plug-amico.png";
import { Button } from "antd";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center flex-col gap-4 min-h-screen">
            <Image src={NotFoundIMG} width={400} height={400} alt="logo" />
            <Link href="/">
            <Button
                    type="default"
                    htmlType="submit"
                    style={{
                        backgroundColor: "#7f19b4",
                        color: "#fff",
                        padding: "0 20px",
                        borderColor: "#7f19b4",
                    }}
                >
                    Back to Home
                </Button>
            </Link>
        </div>
    );
}