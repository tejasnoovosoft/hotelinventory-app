import {Component, OnInit} from '@angular/core';
import {Room, RoomList} from "./Room";
import {CurrencyPipe, DatePipe, DecimalPipe, NgClass, NgForOf, NgIf, SlicePipe, UpperCasePipe} from "@angular/common";

@Component({
    selector: 'hinv-rooms',
    standalone: true,
    imports: [
        NgIf,
        NgForOf,
        NgClass,
        DatePipe,
        UpperCasePipe,
        CurrencyPipe,
        SlicePipe,
        DecimalPipe
    ],
    templateUrl: `./rooms.component.html`,
    styleUrls: [`./rooms.component.scss`]
})
export class RoomsComponent implements OnInit {
    hotelName: string = "Taj"       // interpolation
    availableRooms: number = 20
    hideRooms = false
    rooms: Room = {
        totalRooms: 20,
        availableRooms: 12,
        bookedRooms: 8
    }

    roomList: RoomList[] = []

    constructor() {
    }

    // fetch data from api then assign that data into ngOnInit
    ngOnInit() {
        this.roomList = [{
            roomNumber: 1,
            roomType: 'Deluxe Room',
            amenities: "Air Conditoner",
            price: 500,
            photos: 'xyz.png',
            checkInTime: new Date(Date.now()),
            checkOutTime: new Date(Date.now())
        }, {
            roomNumber: 2,
            roomType: 'Standard Room',
            amenities: 'Wi-Fi, TV',
            price: 300,
            photos: 'abc.png',
            checkInTime: new Date(Date.now()),
            checkOutTime: new Date(Date.now())
        }, {
            roomNumber: 3,
            roomType: 'Suite',
            amenities: 'Jacuzzi, Mini Bar',
            price: 800,
            photos: 'suite.png',
            checkInTime: new Date(Date.now()),
            checkOutTime: new Date(Date.now())
        }]
    }

    toggle() {
        this.hideRooms = !this.hideRooms
    }
}
