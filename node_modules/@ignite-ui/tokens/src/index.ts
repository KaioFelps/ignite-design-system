export * from "./colors"

export * from "./font-sizes"
export * from "./font-weights"
export * from "./fonts"

export * from "./line-heights"
export * from "./space"

export * from "./radii"

/*  Por que fazer isso?
*
*   no futuro, ao invés de importarmos {colors} from "@ignite-ui/tokens/colors"
*   poderemos importar {colors} from "@ignite-ui/tokens"
*
*   isso pois estamos exportando tudo de colors.
*/