import React, { Component } from 'react'

export default class AvailableList extends Component {
    render() {
        return (
            <div>
                <table class="list" id="list">
            <tr>
                <th colspan="4" class="thead">
                    <h2> Available Rides</h2>
                </th>
            </tr>
                <tr>
                    <th>S/N</th>
                    <th>Driver Name</th>
                    <th>Trip direction</th>
                    <th colspan="1"></th>
                </tr>
                <tr>
                        <td>01</td>
                        <td>Basil Ngomoi</td>
                        <td>Africana, Dar es Salaam</td>
                        <td><button class="request">request</button></td>
                    </tr>
                    <tr>
                            <td>02</td>
                            <td>Angela Njogopa</td>
                            <td>Kariakoo, Dar es Salaam</td>
                            <td><button class="request">request</button></td>
                        </tr>
                        <tr>
                                <td>03</td>
                                <td>Gladys Xavier</td>
                                <td>Mbweni, Dar es Salaam</td>
                                <td><button class="request">request</button></td>
                            </tr>
                            <tr>
                                <td>04</td>
                                <td>Maria Desus</td>
                                <td>Lushoto, Tanga</td>
                                <td><button class="request">request</button></td>
                            </tr>
                            <tr>
                                <td>05</td>
                                <td>Larry Jones</td>
                                <td>Makumbusho, Dar es Salaam</td>
                                <td><button class="request">request</button></td>
                            </tr>
                    
            </table>
            </div>
        )
    }
}
