import styles from './PositionPlaygroundPage2.module.scss';
import { useState } from 'react';

const PositionPlaygroundPage2 = () => {
  const [hint, setHint] = useState(false);
  return (
    <div className={[styles.container, hint ? '' : styles.hideHint].join(' ')}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.title}>요소 가운데 정렬하기</div>
          <div className={styles.description}>
            display: flex
            <br />
            justify-content: center
            <br />
            align-items: center
          </div>
          <div className={styles.guide}>
            헤더 섹션
            <br />
            position: sticky
          </div>
        </div>
      </div>
      <div className={styles.mainBox}>
        <img
          src={
            'https://images.unsplash.com/photo-1608315398428-c6d76804838d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
          }
        />
        <div className={styles.absoluteContainer}>
          <div className={styles.circleContainer}>
            <div className={styles.circle}></div>
            <div className={styles.guide}>
              동그라미 👉 섹션의 가운데 정렬
              <br />
              position: absolute
            </div>
          </div>
          <div className={styles.guide}>
            이미지 배경 섹션
            <br />
            position: relative
          </div>
        </div>
        <div className={styles.absoluteContainer}>
          <div className={styles.mainText}>
            <div className={styles.guide}>
              메인폰트 👉 섹션의 가운데 정렬
              <br />
              position: absolute
            </div>
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
      <div className={styles.subBox}>
        <div className={styles.guide}>
          회색 배경 섹션
          <br />
          position: relative
          <br />
          height: 1000px
        </div>
        <div className={styles.absoluteContainer}>
          <div className={styles.circleContainer}>
            <div className={styles.circle}></div>
            <div className={styles.circle2}></div>
            <div className={styles.guide}>
              동그라미 정렬 👉 양쪽에 두개 겹치게 정렬
              <br />
              position: relative
            </div>
          </div>
        </div>
        <div className={styles.absoluteContainer}>
          <div className={styles.content}>
            <div className={styles.guide}>
              텍스트 정렬 👉 가운데 정렬
              <br />
              position: absolute
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vel massa et felis ultricies volutpat. Maecenas et
              augue a lectus ultrices elementum. Donec tincidunt aliquet massa,
              ut auctor lacus semper et. Fusce suscipit lacus eu eros lobortis
              vehicula. Nulla vel massa elit. Nam venenatis est rutrum lacinia
              gravida. Fusce ultrices lacinia velit commodo fermentum. Duis sed
              congue nunc. Maecenas facilisis leo sapien. Quisque lacus diam,
              dignissim in maximus vitae, vehicula sed nulla. Nullam elementum
              sodales ipsum eu accumsan. Nunc ultrices mi et blandit ornare.
              Nulla sagittis leo nec lacus mattis, id hendrerit lacus volutpat.
              Sed vitae commodo sapien, vel maximus velit. Aenean sed tortor
              ullamcorper, pulvinar eros quis, consectetur magna. Proin eget
              enim non neque egestas vestibulum. Morbi non facilisis nibh. Duis
              ut ornare leo, eget lobortis ex. Quisque interdum finibus
              suscipit. Vestibulum sed efficitur dui, in placerat nibh.
              Vestibulum sit amet est ut sem porta euismod sed quis urna.
              Phasellus in tempor ex, eu tempor magna. Fusce eleifend imperdiet
              rutrum. Vivamus sit amet volutpat tellus, id condimentum nibh. Sed
              imperdiet volutpat augue fringilla commodo. Mauris ut semper
              dolor, quis rhoncus tortor. In at nunc urna. Cras euismod ipsum a
              commodo pellentesque. Donec rutrum tortor in aliquet iaculis.
              Suspendisse fringilla leo quis justo ultricies ultrices. Vivamus
              vestibulum non dolor et ultricies. Pellentesque at libero in erat
              sodales fermentum. Vivamus finibus erat dolor, sed eleifend sapien
              suscipit eu. Etiam non elit sollicitudin, interdum magna
              scelerisque, aliquam turpis. Nulla facilisis augue et est lobortis
              sollicitudin. Donec in imperdiet dui. Maecenas gravida ex nec
              ligula consequat elementum. Curabitur non consectetur odio. Nunc
              sed scelerisque ipsum. Fusce sodales ex eu tellus venenatis, sed
              finibus sapien fringilla. Aenean eu sollicitudin mauris. Nunc
              venenatis dui ac eleifend tempor. Cras dolor elit, tincidunt in
              turpis quis, feugiat blandit sem. Sed ornare eros metus, a congue
              risus scelerisque ut. Vestibulum ullamcorper cursus tempor. Sed at
              tincidunt lectus. Etiam mattis euismod ultricies. Morbi malesuada
              quam in sem vestibulum venenatis eu nec ligula. Nullam ac varius
              velit, vel condimentum enim. Integer ornare diam augue, at gravida
              urna molestie sit amet. Integer ornare libero non est tempus
              suscipit.
              <br />
              <div style={{ marginTop: 20 }}>
                배경이미지주소
                <br />
                https://images.unsplash.com/photo-1608315398428-c6d76804838d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80
                <br />
                산타아이콘주소
                <br />
                https://iconvulture.com/wp-content/uploads/2019/11/Santa-Claus-flat.svg
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.floatBox} onClick={() => setHint(!hint)}>
        <div className={styles.guide}>position: fixed</div>
        <img
          src={
            'https://iconvulture.com/wp-content/uploads/2019/11/Santa-Claus-flat.svg'
          }
        />
        <div style={{ fontSize: 20 }}>{hint ? '힌트끄기' : '힌트보기'}</div>
      </div>
    </div>
  );
};

export default PositionPlaygroundPage2;
