import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { SlBasket } from "react-icons/sl";

const NavButtons = () => {
  return (
	<div class="flex gap-[16px]">
		<button><a class="flex gap-3 items-center w-full" href="/"><RxAvatar/>Connexion</a></button>
		<button><a class="flex gap-3 items-center w-full" href="/"><CiHeart/>Favoris</a></button>
		<button><a class="flex gap-3 items-center w-full" href="/"><SlBasket/>Panier</a></button>
	</div>
  )
}

export default NavButtons
