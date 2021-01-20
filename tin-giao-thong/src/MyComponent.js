// import React, { Component } from 'react';

// class Luat extends Component {
//     render() {
//         return <p>Luật an toàn giao thông...</p>;
//     }
// }

// class ThiBang extends Component {
//     render() {
//         return <p>Thi bằng lái xe miễn phí...</p>;
//     }
// }

// class MyComponent extends Component {
//     render() {
//         return <section> {this.props.children}</section>;
//     }
// }

// MyComponent.Luat = Luat;
// MyComponent.ThiBang = ThiBang;

// export default MyComponent;

// export { Luat, ThiBang };


//chapter 3

// Setting an initial component state

import React, { Component } from 'react';

export default class MyComponent extends Component {
  state = {
    khoaCua: false,
    denPhongKhach: true,
    denNhaVeSinh: true,
    denNhaBep: true,
    denPhongNgu: true,
    mayGiat: true,
    tuoiHoa: false
  };

  render() {
    const { khoaCua, denPhongKhach, denNhaVeSinh, denNhaBep, denPhongNgu, mayGiat, tuoiHoa  } = this.state;

    return (
      <main>
        <h1>
            Hệ thống bật tắt các thiết bị điện trong nhà
        </h1>
        <section>
          <button disabled={khoaCua}>Khóa cửa</button>
        </section>
        <section>
          <button disabled={denPhongKhach}>Đèn phòng khách</button>
        </section>
        <section>
          <button disabled={denNhaVeSinh}>Đèn nhà vệ sinh</button>
        </section>
        <section>
          <button disabled={denNhaBep}>Đèn nhà bếp</button>
        </section>
        <section>
          <button disabled={denPhongNgu}>Đèn phòng ngủ</button>
        </section>
        <section>
          <button disabled={mayGiat}>Máy giặt</button>
        </section>
        <section>
          <button disabled={tuoiHoa}>Tưới hoa</button>
        </section>
      </main>
    );
  }
}