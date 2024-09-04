import Note from '../Note/Note';

function Main (props) {
    return (
        <main className='main'>
          <Note onOpen={props.onOpen}/>
        </main>
    )
}

export default Main;