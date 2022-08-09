import React from "react";
import "./list-image.css";

interface ListImageProps {
  listImages: string[];
}

const listPoem = [
  "“Với cả thế giới có thể bạn chỉ là một ai đó, nhưng với một ai đó, có thể bạn là cả thế giới này.”",
  "“Món quà tuyệt vời nhất của tình yêu không phải kim cương, hoa hồng hay chocolate, mà đó là sự quan tâm chân thành và sâu sắc.”",
  "“Bạn đến với tình yêu không phải để tìm kiếm một người hoàn hảo, mà là để học cách nhìn nhận sự hoàn hảo trong một con người chưa hoàn hảo.”",
  "“Em chìm vào giấc ngủ với nụ cười hạnh phúc bởi em biết em sẽ mơ về anh. Nhưng rồi em thức dậy lúc sớm mai, với một nụ cười bởi em biết anh không phải là một giấc mơ.”",
  "“Cảm ơn anh vì luôn là cầu vồng của em sau mỗi cơn mưa.”",
  "“Điều tốt nhất và tuyệt vời nhất trên thế giới không thể nhìn thấy hay nghe thấy, mà phải cảm nhận bằng trái tim.”",
  "“Giữ tình yêu trong trái tim bạn. Một cuộc sống không có tình yêu giống như khu vườn không có nắng với những bông hoa đã úa tàn.”",
  "“Tình yêu không phải cứ nỗ lực là có được đâu.”",
  "“Tình yêu được xây dựng dựa trên sự tin tưởng, và là sự tin tưởng vào tình yêu.”",
  "“Yêu là cho đi. Tình yêu chúng ta cho đi là thứ duy nhất chúng ta có được. Và cách duy nhất để có thêm nhiều tình yêu chính là cho đi thật nhiều.”",
  "“Khi còn yêu họ sẽ tìm cách. Còn khi hết yêu rồi, họ sẽ tìm cớ.”",
  "“Nếu như không phải cả hai người đều thích nhau, thì sự si tình của bạn chính là gánh nặng của người khác”",
  "“Nếu bạn đang phân vân người đó có yêu bạn hay không thì câu trả lời chính là người đó không hề yêu bạn. Vì nếu họ thực sự yêu bạn thì đã không để bạn phải phân vân ngay từ đầu.”",
  "“Bởi vì khi yêu một người, chung thuỷ là niềm vui, là hạnh phúc, chứ không phải sự hy sinh”",
  "“Cuộc đời vốn không công bằng, tình yêu cũng vậy. Anh thích cô ấy, nên sự vụng về của cô ấy cũng đáng yêu. Anh không yêu tôi, thì sự hoàn hảo của tôi cũng là vô nghĩa.”",
  "“Em có ước gì đâu. Một căn nhà bão dừng sau cánh cửa”",
  "“Hóa ra, ông trời không cho em nên duyên cùng ai là để chờ anh xuất hiện”",
  "“Có nhiều cách để hạnh phúc. Cách nhanh nhất là nhìn thấy em”",
  "“Cái na ná tình yêu thì có trăm ngàn. Nhưng đích thực tình yêu chỉ có một mà thôi.”",
  "“I don’t know what my future holds, but I’m hoping you are in it.”",
  "“I bet not even all the fireworks in the world can’t light up my world like you do.”",
  "“You have a life to live, i have a life to love you”",
  "“You light up my life”",
  "“Do you know which side of my heart? It’s beside you!”",
  "“I’m 4, you’re 2. I’m minus you is still equal to you.”",
  "“You’re the reason behind my smile.”",
  "“Meeting you is the best thing that ever happened to me.”",
  "“Ask me why I’m so happy and I’ll give you a mirror.”",
];

const ListImage = ({ listImages }: ListImageProps) => {
  const generatePoem = (index: number) => {
    const arr = new Array(listImages.length);
    arr[index] = listPoem[Math.floor(Math.random() * listPoem.length)];
    return arr[index];
  };
  return (
    <div>
      {listImages.length > 0 ? (
        <div className="container">
          {listImages
            .filter((item) => item !== "")
            .map((item, index) => (
              <div className="list-item" key={index}>
                <div className="list-item-title">
                  <cite>{generatePoem(index)}</cite>
                </div>
                <div className="list-item-image">
                  <img src={item} alt="" key={index} />
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="no-data">
          <p>
            Hiện tại chưa có ảnh nào <br /> cùng đăng những tấm ảnh thật ý nghĩa
            nhé! 😜
          </p>
        </div>
      )}
    </div>
  );
};

export default ListImage;
