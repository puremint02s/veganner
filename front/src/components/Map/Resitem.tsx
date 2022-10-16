import {Restaurant} from "../../types/restaurant";
import * as S from "../../pages/map/Map.styled"
interface ItemProps {
    item:Restaurant;
}
function Resitem({item}: ItemProps) {
    return (
        <S.restaurant>
            <div>
                {`${item.industry}`}
            </div>
            <div>
                {`${item.food}`}
            </div>
            <h3>
                {`${item.name}`}
            </h3>
        <p>주소 : {`${item.location}`}</p>
        
        </S.restaurant>
        
    );

}

export default Resitem;