import React from 'react'

export const NavList = () => {
	const List = [
		{
			name: "Accueil",
            link: "/"
		},
		{
			name: "Hommes",
			link: "/men"
		},
		{
			name: "Femmes",
			link: "/woman"
		},
		{
			name: "Enfants",
			link: "/kids"
		},
	]
  return (
	<div class="flex justify-center gap-[50px]">
		{List.map((element) => (
			<div key={element.name}>
                <a href={element.link}>{element.name}</a>
            </div>
		))}
	</div>
  )
}

