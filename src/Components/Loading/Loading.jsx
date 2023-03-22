import loading from '../../assets/animated/loading.gif'

function Loading() {
  return (
    <div>
      <h1>Come On! Load Some Pokemons...</h1>
      <img src={loading} alt="loading" />
    </div>
  )
}
export default Loading