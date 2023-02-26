
import { CalorieList } from '../components/CalorieList'
import { Counter } from '../components/Counter'



export const CalorieCounter = () => {
  
  return (
    <div>
        <div style={{float:"left",border:"1px solid black"}}>
            <CalorieList />
        </div>
        <div style={{float:"right",border:"1px solid black"}}>
            <Counter />
        </div>
    </div>
  )
}
