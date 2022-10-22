---
slug: deep-dive-into-react-native-new-architecture
title: Tìm hiểu về React Native New Architecture
authors: [Thinh Nguyen]
tags: [facebook, hello, docusaurus]
---

# Tìm hiểu sâu về công nghệ mới của react native

Nhóm React Native vừa thông báo về công nghệ mới của react native sẽ ra mắt trong năm 2022, Bạn có thể kiểm tra tại đây [here](https://reactnative.dev/blog/2022/01/21/react-native-h2-2021-recap)

**_2022 sẽ là năm của kiến trúc mới trong mã nguồn mở_**

Vì bản phát hành gần đây, đây là khoảng thời gian tốt để tìm hiểu những thay đổi đang diễn ra và chúng có thể ảnh hưởng như thế nào để ứng dụng React Native của bạn

Trong bài viết này bao gồm hầu hết các thay đổi quan trọng bởi công nghệ mới

- JavaScrip Interface(JSI)
- Fabric
- Turbo Modules
- CodeGen

  Đầu tiên chúng ta sẽ đi tìm hiểu

## Công nghệ hiện tại

Trước khi đến với công nghệ mới chúng ta sẽ tóm tắt công nghệ hiện tại làm việc như thế nào

Vui lòng lưu ý, Tôi chỉ bao gồm những điểm liên quan để hiểu blog này, nếu bạn muốn tìm hiểu nhiều hơn về công nghệ hiện tại vui lòng đọc tài liệu của react native

- In a nutshell

Khi bạn chạy một ứng dụng RN, tất cả code Javascript của bạn sẽ được đóng gói lại với nhau thành một gói có tên là JS Bundle, Mã Native code được giữ nguyên

Việc thực thi của ứng dụng React Native sảy ra trong 3 luồng

1. Javascript Thread: sử dụng JS Engine, để chạy JS Bundle
2. Native/UI Thread: nó sử dụng để Native Modules và xử lý hoạt động giống UI Rendering, sủ dụng gesture events
3. Ngoài ra Thread thứ 3 gọi là shadow thread, Được sử dụng để tính toán bố cục của các phần tử trước khi hiển thị chúng trên màn hình

Giao tiếp giữa JS và Native Threads được giao tiếp thông qua một cây cầu, Khi gửi dữ liệu đi qua cây cầu nó sẽ được chia thành từng phần(tối ưu hóa) và được phân ra dưới dạng JSON, Cây cầu này có thể chỉ xử lý các giao tiếp bất đồng bộ

![Docusaurus Plushie](https://miro.medium.com/max/1400/1*0LTWA_egTnRLRlqXoRUymg.png)

Một số điều kiện quan trọng:

JavascriptCore: nó là tên của Javascript Engine, cái mà React Native sử dụng để thực thi JS Code

Yoga: Là tên của Layout Engine, cái mà sử dụng để tính toán vị trí của phần tử UI của người dùng trên màn hình

## 1. Javascript Interface (JSI)

Trong công nghệ hiện tại, React native sử dụng Bridge Module để tạo các giao tiếp giữa JS code và Native threads, Mỗi khi data được gửi đến cây cầu, nó phải được đăng ký dưới dàng JSON, Khi dữ liệu được nhận ở phía bên kia nó cũng được giải mã

Nó có nghĩa là Javascript và Native hoạt động không biết về nhau (ie. JS Thread không thể gọi trực tiếp một phương thức trên luồng Native)

Một điều quan trọng khác, Các thông báo gửi qua cầu về bản chất là không đồng bộ, đây là một điều tốt cho hầu hết các trường hợp sử dụng, nhưng có một số trường hợp khi mã JS và mã gốc cần được đồng bộ hóa