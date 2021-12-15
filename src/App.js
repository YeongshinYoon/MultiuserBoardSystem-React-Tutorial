import './App.css';
import User from './components/User';

const users = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name' : '홍길동1',
    'birthday' : '111111',
    'gender' : '남자',
    'job' : '학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name' : '홍길동2',
    'birthday' : '222222',
    'gender' : '남자',
    'job' : '학생'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name' : '홍길동3',
    'birthday' : '333333',
    'gender' : '남자',
    'job' : '학생'
  }
]

function App() {
  return (
    <div>
      {
        users.map(user => {
          return (
            <User
              key={user.id} //map을 사용할 때는 각 요소의 구분을 위해 key props를 추가
              id={user.id}
              image={user.image}
              name={user.name}
              birthday={user.birthday}
              gender={user.gender}
              job={user.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;
