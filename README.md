# Bài Thực Hành Số 1 - Lập Trình Web Nâng Cao

## Thông Tin Sinh Viên
* **Họ và tên:** Phạm Văn Đoàn
* **Mã sinh viên:** N23DCCN010
* **Lớp:** D23CQCN01-N
* **Khoa:** Công nghệ thông tin 1

## Mô Tả Bài Làm
Dự án được xây dựng bằng framework **Next.js (App Router)** kết hợp với **Tailwind CSS**. Các tính năng đã hoàn thành bao gồm:

1.  **Trang danh sách bài viết (Home Page):**
    * Fetch dữ liệu thực tế từ API `JSONPlaceholder`.
    * Hiển thị danh sách 12 bài viết dưới dạng lưới (Grid) có tính đáp ứng (Responsive).
    * Sử dụng các Component tự định nghĩa: `Header`, `BlogCard`, `Badge`.

2.  **Trang chi tiết bài viết (Blog Detail):**
    * Áp dụng **Dynamic Routing** với cấu trúc thư mục `app/blog/[id]/page.js`.
    * Lấy ID từ URL để hiển thị nội dung chi tiết tương ứng của từng bài viết.
    * Có nút quay lại trang chủ tiện lợi.

3.  **Công nghệ sử dụng:**
    * **Next.js 14/15** (Server Components).
    * **Tailwind CSS** cho giao diện.
    * **Lucide React** (hoặc Heroicons) cho hệ thống biểu tượng.
    * **Git/GitHub** để quản lý mã nguồn.

## Hướng Dẫn Chạy Dự Án
Sau khi clone dự án, thực hiện các lệnh sau:

```bash
npm install
npm run dev