export interface Friend {
    // UUID of friend who started the friendship. Composite Key.
    SourceFriend: string,
    // UUID of friend who accepted the friendship. Composite Key.
    DestinationFriend: string,
    // Date/Time that the friendship was formed.
    CreatedAt: bigint
}