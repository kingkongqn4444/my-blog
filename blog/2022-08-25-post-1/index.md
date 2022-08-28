---
slug: huong-dan-deploy-web-len-heroku
title: Hướng dẫn deploy ứng dụng blog lên heroku
authors: [Thinh Nguyen]
tags: [facebook, hello, docusaurus]
---

Bạn đang tìm kiếm các dướng dẫn đơn giản về cách đưa một ứng dụng React trên Heroku? Bạn muốn xuất bản một dự án vào phút cuối và không biết làm cách nào? Đây chính là hướng dẫn dành cho bạn

Trong hướng dẫn này, chúng tôi có một ứng dụng ReactJS đơn giản, chúng ta sẽ triển khai nó, Bạn cần sử dụng một ứng dụng nào đó có sẵn hoặc tạo mới nó sử dụng create-react-app, Đừng lo lắng, chúng ta sẽ thảo luận các bước từ đầu

# Giới thiệu

Đã xây dựng ứng dụng thành công, Bây giờ là thời gian để xuất bản nó
Có một số dịch vụ bạn có thể xuất bản ứng dụng của mình
Heroku là một trong số chúng, Đó là một sự lựa chọn hiển nhiên

Khi nói điến việc triển khai, nó cung cấp cơ sở(`facility`) để xuất bản, quản lý, và scale ứng dụng, Bạn có thể thấy nó ghê gớm(`intimidating`) nhưng làm việc với Heroku rất dễ dàng

# Đăng nhập tài khoản Heroku

Đến trang web [Heroku](https://google.com) và đăng nhập bằng tài khoản của bạn
Sau khi đăng nhập thành công bạn sẽ được chuyển đến trang quản lý

![Docusaurus Plushie](https://www.bacancytechnology.com/blog/wp-content/uploads/2022/05/Heroku-Dashboard-Page-min.png)

# Tạo một tài khoản mới

Nhấn nút "Create a new App" để bắt đầu triển khai ứng dụng

![Docusaurus Plushie](https://www.bacancytechnology.com/blog/wp-content/uploads/2022/05/Create-a-New-Application-min.png)

Nó sẽ hiển thị như bên dưới, điền đầy đủ thông tin bắt buộc và nhấn nút "Create App"

![Docusaurus Plushie](https://www.bacancytechnology.com/blog/wp-content/uploads/2022/05/Create-app-button-min.png)

# Thêm Buildpacks

Để triển khai ứng dụng React trên Heroku, Chúng ta cần thêm buildpacks, nhấn đến tab Cài đặt và sau đó nhấn nút "Add BuildPack" bên trong Buildpacks section

![Docusaurus Plushie](https://www.bacancytechnology.com/blog/wp-content/uploads/2022/05/Add-Buildpacks-min.png)

React buildpack URL của chúng ta là `https://github.com/mars/create-react-app-buildpack`, Copy dường dẫn và thêm nó vào buildpack giống bên dưới

![Docusaurus Plushie](https://www.bacancytechnology.com/blog/wp-content/uploads/2022/05/React-buildpack-URL-min.png)

Sau khi nhấn nút lưu thay đổi. Buildpacks section sẽ lưu trữ đường dẫn URL mà chúng ta đã thêm, Tham khảo hình ảnh chụp bên dưới

![Docusaurus Plushie](https://www.bacancytechnology.com/blog/wp-content/uploads/2022/05/Save-Changes-min.png)

# Triển khai ứng dụng Heroku: Sử dụng Heroku CLI

Nhấn tab Deploy cho Deploying React App sử dụng Heroku Git

![Docusaurus Plushie](https://www.bacancytechnology.com/blog/wp-content/uploads/2022/05/Deploy-tab-for-deploying-React-app-min.png)

Chúng ta có ba phương thức triển khai ứng dụng lên Heroku

1. Heroku Git
2. Github
3. Container Registry

Ở đây chúng ta chọn lựa chọn đầu tiên để triển khai: Heroku Git, Nhấn để tiếp tục

![Docusaurus Plushie](https://www.bacancytechnology.com/blog/wp-content/uploads/2022/05/Heroku-Git-min.png)

Sau khi nhấn lựa chọn Heroku Git option trang bên dưới sẽ hiện ta hiện ta(`appear`)

![Docusaurus Plushie](https://www.bacancytechnology.com/blog/wp-content/uploads/2022/05/Deploy-tab-for-deploying-React-app-min-1.png)

Bây, chúng ta cần cài đặt Heroku CLI trên máy, Xem trang [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli)

Bạn có thể kiểm tra phiên bản sử dụng dùng command
`heroku –version`

Tiếp theo chạy lệnh `heroku login` và một trang web hiện ra bạn login bằng tài khoản đã tạo ở trên

Sau khi đăng nhập heroku bạn có thể làm theo hướng dẫn để kết nối dụ án của bạn với heroku dashboard

một lưu ý quan trọng của heroku : `You can now change your main deploy branch from "master" to "main" for both manual and automatic deploys, please follow the instructions here.` [hướng dẫn tại đây](https://help.heroku.com/O0EXQZTA/how-do-i-switch-branches-from-master-to-main)

![Docusaurus Plushie](./login-heroku.png)

TADA : Quá đơn giản phải không nào
