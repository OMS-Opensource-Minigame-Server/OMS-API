export interface Rank {
    // UUID of rank (from Vault). Primary Key.
    UUID: string,
    // Name of Rank
    Name: string,
    // Colour of rank.
    Colour: string,
    // Title of rank.
    Title: string,

    Priority: number
}