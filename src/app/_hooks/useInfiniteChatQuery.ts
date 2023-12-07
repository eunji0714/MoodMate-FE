import { getMessages } from '@/_service/chat'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useInfiniteChatQuery = (
  userId: number,
  roomId: number,
  size: number,
) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery<ResponseChatGet, Error>({
      queryKey: ['chat', userId, roomId],
      queryFn: ({ pageParam }) => {
        console.log(pageParam)
        return getMessages(roomId, size, pageParam as number)
      },
      enabled: !!userId && !!roomId,
      initialPageParam: 1,
      getNextPageParam: (lastPage) => lastPage.pageable.page + 1 || undefined, // 맞는지 확인
    })

  return { data, fetchNextPage, hasNextPage, isFetchingNextPage, status }
}
