import React, { Component } from 'react'

export default class Table extends Component {
  render() {
    return (
      <div>
         <table class="list" id="list">
            <tr>
                <th colspan="5" class="thead">
                    <h2> List of Rides Taken</h2>
                </th>
            </tr>
                <tr>
                    <th>S/N</th>
                    <th>Driver Name</th>
                    <th>Trip direction</th>
                    <th>Date</th>
                    <th>Time</th>
                </tr>
                <tr>
                        <td>01</td>
                        <td>Basil Ngomoi</td>
                        <td>Africana, Dar es Salaam</td>
                        <td>03.02.2019</td>
                        <td>04:30 p.m</td>
                    </tr>
                    <tr>
                            <td>02</td>
                            <td>Angela Njogopa</td>
                            <td>Kariakoo, Dar es Salaam</td>
                            <td>12.03.2019</td>
                            <td>09:26 a.m</td>
                        </tr>
                        <tr>
                                <td>03</td>
                                <td>Gladys Xavier</td>
                                <td>Mbweni, Dar es Salaam</td>
                                <td>17.04.2019</td>
                                <td>07:48 p.m</td>
                            </tr>
                            <tr>
                                <td>04</td>
                                <td>Maria Desus</td>
                                <td>Lushoto, Tanga</td>
                                <td>18.04.2019</td>
                                <td>07:08 a.m</td>
                            </tr>
                            <tr>
                                <td>05</td>
                                <td>Larry Jones</td>
                                <td>Makumbusho, Dar es Salaam</td>
                                <td>30.04.2019</td>
                                <td>04:28 p.m</td>
                            </tr>
                    
            </table>
      </div>
    )
  }
}
