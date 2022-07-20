import React from "react";
import cloud from '../assets/graphs/cloudy.svg'
import styled from '@emotion/styled'


function CustomTick({ x, y, payload }) {

    switch (payload.value) {
        case 'sunny':
            return (<svg x={x - 10} y={y} width={22} height={22} viewBox="0 0 22.553 22.496">
                <g id="Group_28692" data-name="Group 28692" transform="translate(-180.159 -423.763)">
                    <path id="Path_71" data-name="Path 71" d="M191.479,429.039a5.967,5.967,0,1,0,5.934,5.967,5.951,5.951,0,0,0-5.934-5.967Zm0,11.019a5.052,5.052,0,1,1,5.024-5.052,5.038,5.038,0,0,1-5.024,5.052Z" fill="#fff" stroke="#fff" stroke-miterlimit="8" stroke-width="1" fill-rule="evenodd" />
                    <path id="Path_72" data-name="Path 72" d="M191.95,427.071v-2.348a.466.466,0,0,0-.931,0v2.348a.466.466,0,0,0,.931,0Z" fill="#fff" stroke="#fff" stroke-miterlimit="8" stroke-width="1" fill-rule="evenodd" />
                    <path id="Path_73" data-name="Path 73" d="M191.484,442.491a.463.463,0,0,0-.465.461V445.3a.466.466,0,0,0,.931,0v-2.347a.463.463,0,0,0-.466-.461Z" fill="#fff" stroke="#fff" stroke-miterlimit="8" stroke-width="1" fill-rule="evenodd" />
                    <path id="Path_74" data-name="Path 74" d="M201.764,434.5h-2.285a.465.465,0,0,0,0,.929h2.285a.465.465,0,0,0,0-.929Z" fill="#fff" stroke="#fff" stroke-miterlimit="8" stroke-width="1" fill-rule="evenodd" />
                    <path id="Path_75" data-name="Path 75" d="M183.936,434.963a.463.463,0,0,0-.461-.465h-2.354a.465.465,0,0,0,0,.929h2.354a.463.463,0,0,0,.461-.464Z" fill="#fff" stroke="#fff" stroke-miterlimit="8" stroke-width="1" fill-rule="evenodd" />
                    <path id="Path_76" data-name="Path 76" d="M197.462,429.661l1.61-1.606a.453.453,0,0,0-.642-.64l-1.609,1.606a.452.452,0,0,0,.2.758.454.454,0,0,0,.439-.118Z" fill="#fff" stroke="#fff" stroke-miterlimit="8" stroke-width="1" fill-rule="evenodd" />
                    <path id="Path_77" data-name="Path 77" d="M185.53,440.282l-1.609,1.606a.453.453,0,1,0,.641.64l1.61-1.606a.453.453,0,0,0-.642-.64Z" fill="#fff" stroke="#fff" stroke-miterlimit="8" stroke-width="1" fill-rule="evenodd" />
                    <path id="Path_78" data-name="Path 78" d="M197.46,440.282a.456.456,0,0,0-.641,0,.451.451,0,0,0,0,.638l1.609,1.606a.456.456,0,0,0,.641,0,.451.451,0,0,0,0-.638Z" fill="#fff" stroke="#fff" stroke-miterlimit="8" stroke-width="1" fill-rule="evenodd" />
                    <path id="Path_79" data-name="Path 79" d="M185.527,429.661a.453.453,0,0,0,.642-.64l-1.61-1.606a.453.453,0,0,0-.641.64Z" fill="#fff" stroke="#fff" stroke-miterlimit="8" stroke-width="1" fill-rule="evenodd" />
                </g>
            </svg>)
        case 'partlycloudy':
            return (<svg x={x - 10} y={y} width={22} height={22} viewBox="0 0 31.174 21.114">
                <g id="Group_28711" data-name="Group 28711" transform="translate(8236.814 -528.083)">
                    <path id="Path_12813" data-name="Path 12813" d="M141.427,427.2c2.122,0,4.177,1.219,5.506,4.005a4.86,4.86,0,0,1,1.055-.141c2.487,0,4.511,2.385,4.511,5.315s-2.024,5.314-4.511,5.314H134.867c-2.487,0-4.511-2.384-4.511-5.314s2.024-5.315,4.511-5.315a4.851,4.851,0,0,1,1.054.141c1.317-2.777,3.382-4.005,5.506-4.005Z" transform="translate(-8365.671 106)" fill="none" stroke="#fff" stroke-miterlimit="8" stroke-width="3" />
                    <g id="Group_28693" data-name="Group 28693" transform="translate(-8365.671 106)">
                        <path id="Path_80" data-name="Path 80" d="M154.42,424.857a2.842,2.842,0,1,0,2.825,2.841,2.833,2.833,0,0,0-2.825-2.841Zm0,5.247a2.406,2.406,0,1,1,2.392-2.406,2.4,2.4,0,0,1-2.392,2.406Z" fill="#fff" stroke="#fff" stroke-miterlimit="8" stroke-width="1" fill-rule="evenodd" />
                        <path id="Path_81" data-name="Path 81" d="M154.644,423.92V422.8a.222.222,0,0,0-.443,0v1.118a.222.222,0,0,0,.443,0Z" fill="#fff" stroke="#fff" stroke-miterlimit="8" stroke-width="1" fill-rule="evenodd" />
                        <path id="Path_82" data-name="Path 82" d="M154.423,431.262a.221.221,0,0,0-.222.22V432.6a.222.222,0,0,0,.443,0v-1.117a.221.221,0,0,0-.221-.22Z" fill="#fff" stroke="#fff" stroke-miterlimit="8" stroke-width="1" fill-rule="evenodd" />
                        <path id="Path_83" data-name="Path 83" d="M159.317,427.457h-1.088a.221.221,0,0,0,0,.442h1.088a.221.221,0,0,0,0-.442Z" fill="#fff" stroke="#fff" stroke-miterlimit="8" stroke-width="1" fill-rule="evenodd" />
                        <path id="Path_84" data-name="Path 84" d="M150.828,427.678a.22.22,0,0,0-.219-.221h-1.121a.221.221,0,0,0,0,.442h1.121a.22.22,0,0,0,.219-.221Z" fill="#fff" stroke="#fff" stroke-miterlimit="8" stroke-width="1" fill-rule="evenodd" />
                        <path id="Path_85" data-name="Path 85" d="M157.269,425.153l.766-.764a.216.216,0,0,0-.305-.3l-.767.764a.218.218,0,0,0-.056.209.216.216,0,0,0,.362.1Z" fill="#fff" stroke="#fff" stroke-miterlimit="8" stroke-width="1" fill-rule="evenodd" />
                        <path id="Path_86" data-name="Path 86" d="M151.587,430.211l-.766.764a.216.216,0,0,0,.306.3l.766-.765a.216.216,0,0,0-.306-.3Z" fill="#fff" stroke="#fff" stroke-miterlimit="8" stroke-width="1" fill-rule="evenodd" />
                        <path id="Path_87" data-name="Path 87" d="M157.268,430.211a.216.216,0,0,0-.306.3l.766.765a.216.216,0,0,0,.306-.3Z" fill="#fff" stroke="#fff" stroke-miterlimit="8" stroke-width="1" fill-rule="evenodd" />
                        <path id="Path_88" data-name="Path 88" d="M151.586,425.153a.216.216,0,0,0,.306-.305l-.767-.764a.216.216,0,0,0-.3.3Z" fill="#fff" stroke="#fff" stroke-miterlimit="8" stroke-width="1" fill-rule="evenodd" />
                    </g>
                </g>
            </svg>)
        default:
            return (<svg x={x - 10} y={y} width={22} height={22} viewBox="0 0 25.091 17.433" >
                <path id="Path_12811" data-name="Path 12811" d="M51.262,431.55a4.834,4.834,0,0,0-1.052.14c-1.326-2.775-3.377-3.989-5.494-3.989s-4.179,1.223-5.493,3.989a4.834,4.834,0,0,0-1.052-.14c-2.481,0-4.5,2.374-4.5,5.292s2.019,5.292,4.5,5.292H51.262c2.481,0,4.5-2.374,4.5-5.292s-2.019-5.292-4.5-5.292Z" transform="translate(-32.171 -426.201)" fill="none" stroke="#fff" stroke-miterlimit="8" stroke-width="3" />
            </svg >)

    }
}


export default CustomTick