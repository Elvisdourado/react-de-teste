import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import NavBar from './NavBar'
import Products from './Products'
import Button from './Button'
import DropDown from './DropDown'
import React from 'react'
import Counter from './Counter'
import Newdrop from './Newdrop'
import {BrowserRouter, Route} from 'react-router-dom'
import Contact from './Contact'
import Lista from './Lista'

const languages = ['perna Quebrada', 'acidente', "punheta"]

function App() {
  return (
    <div>
      <BrowserRouter>
     
      <Route exact path="/Contact" component={Contact} />
      
      <NavBar></NavBar>     
      <Newdrop></Newdrop> 
      <DropDown 
      label="motivo"
      items={languages}
      />
      <div className='products'>
        <Products
          image='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSlMMIBZniQEmiHnWsIm8TE_hoGiXKjfQJSVZifFCd5YlP3zvtUza_Y-eEB8Iolnz4t4kr_8JiINw&usqp=CAc'
          title='Sapato de correr'
          info='melhor tenis do mercado'
          text='compre agora!'
          price={299}
        />
        <Products
          image='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTaSxbdXXhwZdkXBPGqLHDaQ0WVzwh1l3L2Tqi98jyePDOXXxXzh9ZyzY2-ua3NyffXFrT4DkdyHA&usqp=CAc'
          title='Sapato de véi'
          info='bom pra trabalhar'
          text='compre agora!'
          price={199} />

        <Products
          image='data:image/jpeg;base64,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'
          title='carteira'
          info='guarde seu dinheiro'
          text='compre agora!'
          price={99} />

        <Products
          image='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExMVFhMWFxgVFhcXEhUYFRYXGBcWFhUXFRUYHSghGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NFQ8PFSsdFRkrKysrKysrKystKys3LSs3NzcrKystKy0tKy0tLS0tKystKy0tKzc3Ky0rKzcrNzctK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xAA+EAACAQIDBQYDBgMHBQAAAAAAAQIDEQQFIRIxQVFhBgcTcYGRIqHBFDJCUpLwYrHRIzNDcoKi4RUkU5Px/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGBEBAQEBAQAAAAAAAAAAAAAAABEBMSH/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8k7avcQOadtMBh7qpiae0vwwfiS8moXs/MCfBAdl+12Gx7qKi5qVO11OKi2n+KKu7xvp09ifAAAAAAAAAAAAAAAAAAAAAAAAAAAACIzXtPhMNdVcRBSX4E9qf6I3l8jT8171qUbxoUW3a+1VmoK3NQV5S+QHRzDzDNKFBXrVadNcNuaTfknq/Q4fnHeHjK9rVtiD3xpLw7f6tZ/M1irjJSu3ve+Wu0/OTbbCx2nNO9HCU7qjGdaXO3hw9ZT19os0rN+9LGVLKk4UYv8AJHaml1lU0fokaLOTbu9/708inYIsZOaZvXxDfjVqlTXdOpOSS42V7L2MDad1uSXLT59C/wCGWqkQqb7G548FiqeIs9hPYqdacrbTXlpJLoj6RpVVKKlFpxkk01uaaumj5ToSs+Gujb4K+p2Hue7T7cXgKkk5QW1QldNSp73BPjs710fQYmunAArIAAAAAAAAAAAAAAEHmfa7BYe6niIOS/BB+JPycYXa9QJwHNs371FG/gUHpf4q0rbuVOF2/dGk5t3gYyslevJJ740l4SS4/Evjv0uFjueYZrQoK9arTprhtzSb8k9X6GrZl3mYOn/dqpWfBxhsR/VUs/ZM4jLHzcpSW98WryvxblK7ZjO7STd0t123b1ZFjpOa96+IltKjTpUrc71J9LSezD5M1DMu1WKr/wB5XqzT3xc3GP6KdokLslyFJsEeeJK1r2XRJemnApevUyoYNsyqeDQVGwpt8C9DCNkpDDpF2MEIVHwwZcWGM6MSpxKiPlQMPEUSZnExa9MioGcbGVl+OnTnCrTls1abUqbS5cG9z8nvT4nuJpWMO7TutGB9M9ku0EMdhoV4aP7tSPGE196PlxXRomT547AdqXgMSptv7PVtCsuXKokuV36No+hadRSSlFpxaTTTumnqmnyKzuKgAEAAAAAAxsdj6VGO1VqQhHg5SSu+SvvfQ5p3qd5FTCzeEwdlWt/aVmk1TvujBPRy5t6LdZvdyrCdpazk5zqylWb1qy+ObX5U5p7K9PYLHfsz7dUKabhTq1Lcdnw4LzlUs7dUmaXmvehiG0qfhUoyV04p1ZW6VH8HujnNbFTnduTe1vu27+5Z2GwsTmbdqa1dPbqVZvlUm3Dz8ODjEiauLk2mvhsrWjovbj63KYYVsyaWXNkVHpb+ur6+ZXGm3uRL08vRk08KkIVD08HJmRDLyXjRKvDLEqOhgki/HDoynE8cQLXhlUYlbiEgKGjyxcZ40BTY9FjxgeSKJFdjxoDAxNK5FV6djYJwI7FUCKilK3Vcjr3c/wBqrr/p9aWqTlh5PjHe6d+mrXS64HI6sC5gq84TjKDcakZKcJJ6qStbz3IG4+rAa92H7TRx+GVXRVY/DVh+WfNfwvevbgbCVgAAAAAfPfexkk4YqpUadpyck+d9fr8jnLjZn1L25yGOKw8lb40rxflwPm7OcA6c2mrNOzIuMbCYlpmxZelOxqsdCbyPEWkk9wabVSw1raF3wS/C1rlLZplZ8Iq8M9cuRSpgepHjR7KR4BS0HEBsClnh6ymRB7JFOyVXPbhVNjxlTFgLZS1cuNFLAKJZq07l1HjAhcZQI6aNgxFO5D4mlYipnsV2jngcQq8Vem7QrQX4ofmS/Mt6+lz6MwmJhVhGpTkpQmlKMluaaumfKMXZ3/fI6f3S9rfBmsFWl/ZVHehJu+xN76bfJvd1/wAwxNx2UAFZAABTUjdWOL95/ZvYk6sVo9/9TtRDdp8sVejJWu7AfK+Jo7Lse4eq0yf7SZW6c5RfDca29CNY3vI8cpxS4knNGi5LjdiSN+wklOO1c0msdxPGjLlSRalEDHsGVziUAGeBo8QCRSkeo9RBTFi9gzxgNsbRbYiwK2Us9uUSbugoepdCjW/3rX6fUuTotb7rhdv21AtThfzI/FUPT98CRlK/G/Ddw6mNWoXune3L/wC/0AgsVS2We4aV/h0vz3NW3NNcUXsyvp0/e8xMK3tIiu+92Pa77ZR8GrL/ALmikpP/AMkN0ai5vg+tnxN3PmTAZjUwtaGIoyUZ02tlPRSW6UJc01w/pp9Edm88pY3DwxFJ6SWseMJL70JdV89HxKzqTAAQPGj0Aco7y+z2rnFc2vqvqcax1GzPqzO8vVelKD3715nz52uyd0qktLJt+j4oLjTaU7M3HstmOmw35Gm1I2ZmZbidmSd+IxrXTpFiRRhcRtRXkV1WaYWJFtl0tsiqHIBlLYHp6UI9SAqaPLBldPDSlwAsuJ7TotvT+Rn08ve9v0M2m4w3iCNjl83wL8Mq5szaeKT3HlSUmWIjsVlsfzO/PqWpwpwi1q7779NVoZlSnd6sxa7gtd6tr9QqKliZbXwr2Lv2SUr7Tsyr7XCy2VtKW5xs+NrvdpvLOJxLjtbc4wSS2W3aWv8AC9/DmQW8RhYvqYDjFXtrZ2dtXF9UtVvPcTmsI7DW1U2Vq38Eb7nq0k78dLEVje0UpXUXGKve1ON3/wCyX0IrPqSte7UUuLkkv0veSXd325eAxVpXeHqyUaqStbW0asY3dmr6rXS610NJli7ttr4ucntyfXXQ+mO7n7DicFSr0MPQg2tmolSjeNSOkle1+q6NBK2z7XT/ADx/UgXNhcl7AIqAAA0LvE7PKpF1Irfv6Pg/ob6WsTQU4uEldNWA+UM4wTjJ6aoioyszqfeH2edKblbTj1XBnMMVS2WRrG49k8xUlsS3rcbNOnc5Zl2MdOSkjqGVVVVgpe5rE1blTLU4k7TwaZceWIsRrjgynwm+DNmjl8eRc+zRXBEitZhg5PgZUMrb36EzOSiR+KzC27UsRZeDhDVss1MyhHRGJivEqLkiillyitqTWm+7WgF9YuU38KL0cLJ6yZZpY+CjenFyvwl8PG2l9/1LWMx7i34lWNKDWkZLVvnHRyfklxCpNVqVFXnJJfmk7LXdq9DFxOc3bhGEr8GleL9efoanjM6pU1aCk7X1qSa3/lgm5W82iGx3aWpUuk3bkvgh6xhrJeciUbVjMz1XiVVGV7vY3tJ/d2fi3rp6ojcZnlOLbUXtS3ym1Hdu+BXbt6Gq+PVlotFyire9vqUxwj4tL99AVK4ztFKXF6btn+zX6tZv1IyeNm9VZeSu35yldnqpwXOT6fv6knlmX1qrtRoOT57Ldvbd6sRETTw1So/uyk+t2zPhkjVvFnCmv4pa/pWvyOh5J3X46uk6tTwoPgtPlGy/mb7kPdPgqFnOLqy/i3ew8HNO7XsfhsXiVGUKlWlGLlObi4U78Iri+J37KspoYaHh0KUKcN9oxSTfN82XsHg6dKOzTgox5JWL5AAAAAAAABBdrcnWIpPT4kvdHzr2kyt0pyg1u3H1O0co70+z3+LFdfTiDHC3ob53fYpyvBvcaZjqFmya7A4nZxUU3pJNeu9fyGdb3jsFGmkkKs0jCx+OUN70Ij/q0aj2U7+tjTCUrY1LcWvFlLoRFfNaUE5KW21+CktqV+Wml/UuvMaik9uNOhR2dZVWvE2tLKOuzb9TFIzqkEleTSXNuy+ZG4nHUlJwW1Kdm01FuPltbr9N5ruZdpKEFstyrNO/9pJ7G++iknKy4WjHzIDG9rK1RtU7xv8AhppwVurTc5LzkSq23GZpOMNmpKFGV3Zxledr6NRkm938JE4/O6Kk57LnPZspzahpdPS95NdEkalKVR3bko81G1/Vr6stR2E+b/U2/JafzAm8X2onLSF0uVOOyvWbvN/Iip1qs23e197WrfnNu/zKXOT0tb/Nq15RW72MvB5XWry2YRnN9E/5R3e4RhLDxX3mr+d2V7Ufwq/mvp/wb/kPdFi61nUSpRf5tX7L+p0bIu6PB0bOrerLrpH2Qo4Jg8ur13s04Sk+UU3/AC3fI3XIu6XF1rSq2px/id5ey/qd9wGU0aKtTpxiukUjOFHOci7pMJRs6l6kuu79K0N5wOVUaKSp04xS5JGaCAAAAAAAAAAAAAAEfnmAValKLWttCQAHzJ2nyvwqso20d7Gs4Wq6NaM/yyT9L6/I7j3pdn/8aK03vz4/1OIZtKMdeN7Jc/8AhEXNb5n+OjUhGpfZhKKaUnaUuqjvZqEMxhB3blvd1tqLadtNHe2nIgPtLe9lqlTv0RrSttqdtZQpqnQUaet5OMVtSfBuclppZaRvpvNfxOKr1pbcpO7/ABSk9p+rvJ+mhZilHcteb/d/ZIysJl9as9mEZSb4RT+dtX6sDFVKnH7zcnyWi9lq/wDaVOq3ooqK5Wt/tW/1ub5kPdTjK1nKKpxfPf7L6s6JkXdBhqVnWbqPluj7IiOEYLKqlZ7MITqPgktF/pju9zd8h7qMZWs5pUo9d/svqzvmXZJQoJRp04xS5JEigOcZD3RYSjZ1b1ZcnpH2RvWAymjRSjTpxilyijNAAAAAAAAAAAAAAAAAAAAAAAAAGJmmAjXpypy3P5M4D2u7scVCo3Ti5w/DbkfRIA+S6XYfHOVvs1R+n1Nlyvukx1Vragqcecpftn0dY9A5ZkPc1h6dnXm6j5L4Y/1Z0HK8hw+Hjs0qUIrpFEkACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z'
          title='carteira'
          info='guarde seu dinheiro'
          text='compre agora!'
          price={99} />
      </div>
      <Counter></Counter>
      <Lista></Lista>
      <Button>Log in</Button>      
      </BrowserRouter>
    </div>

  );
}

export default App;
