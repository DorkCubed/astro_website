import { useState, useEffect } from "react";
import "./pictures.css";
import Picture from "./Picture";
import VanillaTilt from "vanilla-tilt"


function Pictures() {
  const [list, change_list] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  const list1 = [list[0] + ".jpg", list[1] + ".jpg", list[2] + ".jpg", list[3] + ".jpg", list[4] + ".jpg", list[5] + ".jpg", list[6] + ".jpg", list[7] + ".jpg", list[8] + ".jpg"];

  useEffect(() => {
    const totilt = Array.from(document.querySelectorAll('.tilt')) as HTMLElement[];

    if (totilt) {
      totilt.forEach(element => {
        VanillaTilt.init(element as any, {
          reverse: true,
          max: 10,
          speed: 400,
        });
      });

      return () => {
        totilt.forEach(element => {
          (element as any).vanillaTilt.destroy();
        });
      };
    }
  }, []);

  function next() {

    if (list[8] <= 9) {
      let blah = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      let a = 0;
      list.map(e => {
        e += 9;
        blah[a] = e;
        a++;
      })
      change_list(blah)
    }


  };
  function back() {
    if (list[0] > 9) {
      let blah = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      let a = 0;
      list.map(e => {
        e -= 9;
        blah[a] = e;
        a++;
      })
      change_list(blah)
    }
  }
  return (
    <div className="pictures-div">
      <div className="pictures">
        <Picture img_name={list1[0]} />
        <Picture img_name={list1[1]} />
        <Picture img_name={list1[2]} />
        <Picture img_name={list1[3]} />
        <Picture img_name={list1[4]} />
        <Picture img_name={list1[5]} />
        <Picture img_name={list1[6]} />
        <Picture img_name={list1[7]} />
        <Picture img_name={list1[8]} />

      </div>
      <div className="gallery_buttons">
        <button onClick={back} className="back"></button>
        <button onClick={next} className="next"></button>
      </div>
    </div>
  )
}

export default Pictures;
