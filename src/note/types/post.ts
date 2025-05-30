// types/post.ts

/**
 * 게시글(Post) 타입 정의
 */

export interface Post {
  id?: string;
  title: string;
  content: string;
  author: string;
  createdAt: number | string;
  postNumber?: number; // 게시글 번호 (선택적 필드)
  isNotice?: boolean; // 공지사항 여부
  hasAttachment?: boolean; // 첨부파일 여부
}
