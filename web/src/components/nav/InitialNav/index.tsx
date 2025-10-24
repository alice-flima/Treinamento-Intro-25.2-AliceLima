import Link from "next/link";
import NavbarLogo from "../NavbarLogo";
import { ShoppingCart } from "lucide-react";
import { User} from "lucide-react";

export default function LandingPagesNav({
  itensCarrinho,
  Preco,
}: {
  itensCarrinho: number;
  Preco: number;
}) {
  return ( 
    <nav className="w-full py-6 px-8
    flex items-center justify-between">
      <div className="text-pink-500">
        <NavbarLogo isH2 />
      </div>

      <ul className="flex items-center gap-4 text-xl">
        <li>
          <h4 className="font-medium" >Olá, Ntequinho!</h4>
        </li>
        <li className="ml-8">
            <Link href='/layoutbasico/carrinho' className="button-md border-pink-200 text-pink-50 bg-pink-500 flex items-center gap-2">
              <button><ShoppingCart /> Carrinho</button>
            </Link>
            <div>
            <p>{itensCarrinho} itens</p>
            <p>R$ {Preco}</p>
            </div>
          </li>
        <li className="ml-8">
            <Link href='/login' className="button-md border-pink-200 text-pink-50 bg-pink-500 flex items-center gap-2">
              <User/> Login
            </Link>
          </li>
      </ul>
    </nav>
   );
}