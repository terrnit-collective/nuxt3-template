
type Themes = 'default' | 'neon' | 'rose'

export const changeTheme = (theme: string) => {
	document.querySelector("html")?.setAttribute("data-theme", theme);
}

