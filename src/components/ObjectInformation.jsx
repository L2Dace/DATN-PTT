/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

const ObjectInformation = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/279525519_5092006547551423_7981801745803409556_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFX0bpZs9yie1_6_5f9aI0JFeZNrf5fALEV5k2t_l8AsZBjC23Ukuhpq8RnyC7WJxAf7FaYHZn4VdwfewldHNOG&_nc_ohc=USlUYX5FhCkQ7kNvgGgpo5C&_nc_ht=scontent.fdad1-3.fna&oh=00_AYA-oqaD1nluSeRq3vcdnOBdDNLzXHZ2QhRIraUXrr90QQ&oe=6674CFFD"
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4 ">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Trường Đại học Sư phạm Kỹ Thuật
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Chào mừng các bạn đến với Trường Đại học Sư phạm Kỹ thuật thuộc
                Đại học Đà Nẵng, đây là cơ sở giáo dục đại học định hướng ứng
                dụng, đào tạo nguồn nhân lực kỹ thuật công nghệ các cấp: kỹ sư
                công nghệ, cử nhân sư phạm kỹ thuật và kỹ sư thực hành ứng dụng.
                Đến với Trường Đại học Sư phạm Kỹ thuật, các bạn có cơ hội học
                tập tại các cơ sở khang trang, tiện nghi, các xưởng thực hành,
                các phòng thí nghiệm đầy đủ thiết bị và hiện đại. Vị trí của
                trường nằm ở trung tâm thành phố Đà Nẵng, bên cạnh bãi biển
                Thanh Bình thơ mộng, là môi trường sống và học tập an toàn, tiết
                kiệm và hiệu quả đối với sinh viên cả nước.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                Phát huy thế mạnh là một trường thành viên của Đại học Đà Nẵng,
                Trường Đại học Sư phạm Kỹ thuật được kế thừa và chia sẻ các
                nguồn lực chung của Đại học Đà Nẵng, đáng kể là đội ngũ các Giáo
                sư, Phó Giáo sư, Tiến sĩ, Thạc sĩ, các giảng viên nhiều kinh
                nghiệm và tâm huyết của Nhà trường và từ các trường thành viên
                khác đến giảng dạy tại trường.
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  Tự tin, năng động, thực tiễn và sáng tạo là các cam kết của
                  Nhà trường về phẩm chất của sinh viên tốt nghiệp trường Đại
                  học Sư phạm Kỹ thuật.
                </p>
              </p>
              <br />
              <a
                href="https://ute.udn.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 text-sm mt-2 underline "
              >
                {" "}
                Trang chủ Trường Đại học Sư phạm Kỹ thuật{" "}
              </a>
              <br />
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 ">
                {" "}
                Nhấn phím C để tắt thông tin{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );

  if (currentStage === 2) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover rounded-xl "
                  src="../assets/huanchuonglaodong.jpg"
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4 ">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Huân chương lao động hạng II và III
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Huân chương Lao động là một loại huân chương của Nhà nước Việt
                Nam Dân chủ Cộng hòa (nay là Cộng hòa Xã hội chủ nghĩa Việt Nam)
                dùng để ghi nhận các công lao đóng góp vào công cuộc xây dựng
                đất nước đã được Đảng Cộng sản Việt Nam, nhà nước và nhân dân
                Việt Nam chứng nhận.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                Từ những thành tích đã đạt được, nhà trường đã được Chủ tịch
                nước tặng thưởng Huân chương Lao động hạng Ba và hạng Nhì cùng
                nhiều bằng khen khác của Thủ tướng Chính phủ, Bộ Giáo dục & Đào
                tạo, Tổng cục Dạy nghề, Bộ Lao động Thương binh và Xã hội, Ủy
                ban nhân dân thành phố Đà Nẵng.
              </p>
              <br />
              <a
                href="https://ute.udn.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 text-sm mt-2 underline "
              >
                {" "}
                Trang chủ Trường Đại học Sư phạm Kỹ thuật{" "}
              </a>
              <br />
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 ">
                {" "}
                Nhấn phím C để tắt thông tin{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="fixed inset-x-0 bottom-0 p-4">
        <div className="relative max-w-xl rounded-lg bg-gray-100 p-6 shadow-sm">

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <img
              alt=""
              src="../assets/co.jpg"
              className="h-full w-full rounded-xl object-cover"
            />

            <div>
              <h2 className="text-lg font-medium text-gray-800">
                CỜ KHEN THƯỞNG THI ĐUA
              </h2>

              <p className="mt-4 text-sm text-gray-500">
                Cờ khen thưởng được Bộ Giáo dục và Đào tạo tặng Phòng quản lý Khoa học và Hợp tác Quốc tế đã có thành tích xuất sắc trong năm học 2021-2022
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Nhấn C để tắt thông tin
              </p>

              {/* <div className="mt-6 sm:text-right">
                <a
                  href="#"
                  className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                  Find out more
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover rounded-xl "
                  src="../assets/chungnhaniso.webp"
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4 ">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Xây dựng và đưa vào vận hành hệ thống ISO 9001:2015
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Nhằm nâng cao hiệu quả quản trị đại học theo hướng hiện đại, chuyên nghiệp, nhà trường đã xây dựng và ban hành hơn 100 quy trình quản lý theo tiêu chuẩn ISO 9001:2015, với hơn 1600 trang tài liệu. Hệ thống đã được đánh giá và cấp Chứng nhận đạt chuẩn ISO 9001:2015 của tổ chức TQC (Center for Testing and Quality Certification). Bên cạnh đó, đã triển khai các hệ thống hỗ trợ quản lý, đánh giá phân loại viên chức, đào tạo trực tuyến, thư viện số,…
              </p>
              
              <br />
              <a
                href="https://ute.udn.vn/TinTuc/5685/1/10-dau-an-ket-qua-noi-bat-cua-Truong-Dai-hoc-Su-pham-Ky-thuat--Dai-hoc-Da-Nang-trong-nam-2021.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 text-sm mt-2 underline "
              >
                {" "}
                10 dấu ấn, kết quả nổi bật của Trường Đại học Sư phạm Kỹ thuật - Đại học Đà Nẵng trong năm 2021{" "}
              </a>
              <br />
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 ">
                {" "}
                Nhấn phím C để tắt thông tin{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStage === 5) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[140px] w-full place-items-center rounded-lg p-6 ">
      <img
        className="object-cover object-center w-100 h-96"
        src="../assets/chungnhankiemdinh.webp"
        alt=""
      />
      <p className="text-white-600 dark:text-gray-300 text-sm mt-2 ">
                {" "}
                Nhấn phím C để tắt thông tin{" "}
              </p>
    </div>
    );
  }

  return null;
};

export default ObjectInformation;
