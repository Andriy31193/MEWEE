import ProfileAvatar from "../../assets/image/ProfileAvatar.png";
import ProfilePortfolio from "../../assets/image/icons/ProfilePortfolio.svg";
import ProfileLovely from "../../assets/image/icons/ProfileLovely.svg";
import ProfileFlash from "../../assets/image/icons/ProfileFlash.svg";
import ProfileGallery1 from "../../assets/image/ProfileGallery.png";
import ProfileGallery2 from "../../assets/image/ProfileGallery.png";
import ProfileGallery3 from "../../assets/image/ProfileGallery.png";
import ProfileGallery4 from "../../assets/image/ProfileGallery.png";
import ProfileGallery5 from "../../assets/image/ProfileGallery.png";
import ProfileGallery6 from "../../assets/image/ProfileGallery.png";
import { postDataTypes } from "../post-show/dataPostShow.interface";

export const userInfoData: any = {
  id: "1",
  avatar: ProfileAvatar,
  userName: "Anna Korn",
  lockal: "Italy",
  subscribers: "13K",
  subscriptions: "35",
  education: [
    {
      id: "1",
      icon: ProfilePortfolio,
      text: "Frederick II University of Naples.",
    },
    {
      id: "2",
      icon: ProfileLovely,
      text: "www.snapfocus.com/annakorn",
    },
    {
      id: "3",
      icon: ProfileFlash,
      text: "In relationship with Michael Bricks",
    },
  ],
  gallery: [
    { image: ProfileGallery1 },
    { image: ProfileGallery2 },
    { image: ProfileGallery3 },
    { image: ProfileGallery4 },
    { image: ProfileGallery5 },
    { image: ProfileGallery6 },
  ],
};

export const profileButtonsData = [
  {
    id: 1,
    text: "Пости",
  },
  {
    id: 2,
    text: "Портфоліо",
  },
  {
    id: 3,
    text: "Друзі",
  },
  {
    id: 4,
    text: "Групи",
  },
  {
    id: 5,
    text: "Фото",
  },
  {
    id: 6,
    text: "Відео",
  },
];

export const profileItemData: postDataTypes[] = [
  {
    id: "e2dd5a4f-bebd-4061-9017-5790eda4f1a8",
    userId: "d084d1e6-4aeb-47c4-b1a6-0f162ed2b701",
    username: "User1",
    profileImageUrl: "profile_image_url_1",
    location: "Location 1",
    category: "Category 1",
    imageUrl: "image_url_1",
    description: "This is the content of the first post.",
    likesCount: 0,
    comments: 0,
    shares: 0,
    title: "First Post",
    attachment: "U2FsdGVkX1/lcIs/BA5UHffIoa5qujd189NUbMkkIT78aZY1iCOXNPhseU2nf0bQdydSGMYOTegz72spoAFW+blimYyxPex8b/tzp3SfHOOmVeAvcPnvHr1iEcCzIBAaj6YhtG74yAniF1Fti2ecL4fNm0DniFOiqGHBJe8+pw7q4nBZp5FCOlejVgCnduuUEXiAHNNnecWUa9BD4SgBR7BScz0n7g4zdENq/GLNPMe4ZTPhsE2e6rwMh/U54s4d4dJh1g9KGLCq0Ddx6xaeQbFhEBrhR2ZaJGwF/vvMCnfSyZUlV2svr95HHmUsAqKW/7gygFJ/IZmh3X/WxZMhaSG9rgDZvC438OitQ5OFzOhXcO55xRBemn69Mwzf5kllmEHf0tPcf7kpiLzzqZ5p6bpjyKBuVD3CoQiL+VeVYBMEuiIimmdwob+5vQ9v2+vtJgkwkNqqPleTiMUcbMqp4uHG7knDrRaDj2mAgEgHGjC71E/KQqyCxqsI1in1bTp50OjtLiXjkVJmem7YslRGDzjj7j9noAxK70X6xW3AzHRD/xNQuAi9ptoU47ok+Gi7NlDz6AUaAS4xMwq9+t/3PXN1j9hrQzAAn1NW8lJlnuc7kfvf5B+Wo2CMGAZL2h6PCjFQvXk0EQIgQBxGkMJecIegIIYkKA4QsjTxWLG6nkXFth2gzDJAC5Oqvxw35aVS11tl8cli8kpLtx4Kqusl0vd4RPrg+EXKRTdcYZpJ682cr7xfcdGLA51zNlVeQ/tbDRicYro8c7i6ADeRG51mfMN21KLN5iVr1Ke/Osf13BNIn0+pulJMaTiNMjvz78pBUPdcyYUib+4bP8JlgOlLXJUGr7axEQuRSvDJTpfcqSXKGXJW+B6f91NpsjuLCJ+iFa9ToB6x9kVSogTu2dayFewZ/AtgkIvs0v9MKtzLmQ9Ixq0dxWym1grM70qhag21ayA17vnzCmu14A3NtmX3T5sS6RIgNOPEpuMVPHU6jrE4g+lF3/HEHuvOTBagzpUnqUk81l7wTxYJJ0j1IZCRnHEnJ9hc+2AbezPXoeCXe72+uHoFTscwJ5Sl9wkb/CP0cNhZZOrCgPnowoIxwlSL1BiJgLtrx+etpNfHytcWXNpKOXbIB7yJlBXp5tVsTRzlHjUYrnj/dBfztJX+HcnQv7vrlcoJ01c04PabzBU45/aI1po1fGiMNtgraMJqbG7vABKQ7I12qx7IZOB/Fy+JaB+Kqx9vhRqorxuqbu+tD7pbx8MC/uPLxUsbTTiW5jJvDInIjGPkayDg8Dd7bxW/xO5wyXnHJ7h6BdYddWt3BisTocWzQnwVFHDDOvB+HSThGxrPMScNMXEIi4DYnv5blPP9DclOVrDUkrsQ1Vm4tAwmKLhD+iPKGFylSdA1WtK7t+VSLoKh7FxnKRpRFi3eMovT8KmO8Z1XlnBVdeZQLWbYvluNJY3SgI99vG+0mGqcc4/LLGOHWiS0vua+jIJF4d6BKAfjQ6im4SEuVwcDi98aZlaDO7Rg6hjBXCEUydcXOYSgIJHj5OjPXfOG68fp90kT6R3dlHe9X7HvIJNbzzf8ZB+pkYPUQhGJkJJnJfyyZOfpYyq7Qg9KDO0IyrYlSpQ6Fmm75Zv/IDbKW/YKc1pbh/jtbwdCZqLVREDFvLy/V+So8mrtQbX9gquo6zyaAJFak+I6v+XXXa7Wl7SQ23Y=",
    createdAt: "2024-04-27T00:00:00.000Z", // Provide a valid date string
  },
  {
    id: "e2dd5a4f-bebd-4061-9017-5790eda4f1a9",
    userId: "2a6f6099-0b2a-4b63-8d02-0d7dc60e9c95",
    username: "User2",
    profileImageUrl: "profile_image_url_2",
    location: "Location 2",
    category: "Category 2",
    imageUrl: "image_url_2",
    description: "This is the content of the second post.",
    likesCount: 0,
    comments: 0,
    shares: 0,
    title: "Second Post",
    attachment: "U2FsdGVkX1/lcIs/BA5UHffIoa5qujd189NUbMkkIT78aZY1iCOXNPhseU2nf0bQdydSGMYOTegz72spoAFW+blimYyxPex8b/tzp3SfHOOmVeAvcPnvHr1iEcCzIBAaj6YhtG74yAniF1Fti2ecL4fNm0DniFOiqGHBJe8+pw7q4nBZp5FCOlejVgCnduuUEXiAHNNnecWUa9BD4SgBR7BScz0n7g4zdENq/GLNPMe4ZTPhsE2e6rwMh/U54s4d4dJh1g9KGLCq0Ddx6xaeQbFhEBrhR2ZaJGwF/vvMCnfSyZUlV2svr95HHmUsAqKW/7gygFJ/IZmh3X/WxZMhaSG9rgDZvC438OitQ5OFzOhXcO55xRBemn69Mwzf5kllmEHf0tPcf7kpiLzzqZ5p6bpjyKBuVD3CoQiL+VeVYBMEuiIimmdwob+5vQ9v2+vtJgkwkNqqPleTiMUcbMqp4uHG7knDrRaDj2mAgEgHGjC71E/KQqyCxqsI1in1bTp50OjtLiXjkVJmem7YslRGDzjj7j9noAxK70X6xW3AzHRD/xNQuAi9ptoU47ok+Gi7NlDz6AUaAS4xMwq9+t/3PXN1j9hrQzAAn1NW8lJlnuc7kfvf5B+Wo2CMGAZL2h6PCjFQvXk0EQIgQBxGkMJecIegIIYkKA4QsjTxWLG6nkXFth2gzDJAC5Oqvxw35aVS11tl8cli8kpLtx4Kqusl0vd4RPrg+EXKRTdcYZpJ682cr7xfcdGLA51zNlVeQ/tbDRicYro8c7i6ADeRG51mfMN21KLN5iVr1Ke/Osf13BNIn0+pulJMaTiNMjvz78pBUPdcyYUib+4bP8JlgOlLXJUGr7axEQuRSvDJTpfcqSXKGXJW+B6f91NpsjuLCJ+iFa9ToB6x9kVSogTu2dayFewZ/AtgkIvs0v9MKtzLmQ9Ixq0dxWym1grM70qhag21ayA17vnzCmu14A3NtmX3T5sS6RIgNOPEpuMVPHU6jrE4g+lF3/HEHuvOTBagzpUnqUk81l7wTxYJJ0j1IZCRnHEnJ9hc+2AbezPXoeCXe72+uHoFTscwJ5Sl9wkb/CP0cNhZZOrCgPnowoIxwlSL1BiJgLtrx+etpNfHytcWXNpKOXbIB7yJlBXp5tVsTRzlHjUYrnj/dBfztJX+HcnQv7vrlcoJ01c04PabzBU45/aI1po1fGiMNtgraMJqbG7vABKQ7I12qx7IZOB/Fy+JaB+Kqx9vhRqorxuqbu+tD7pbx8MC/uPLxUsbTTiW5jJvDInIjGPkayDg8Dd7bxW/xO5wyXnHJ7h6BdYddWt3BisTocWzQnwVFHDDOvB+HSThGxrPMScNMXEIi4DYnv5blPP9DclOVrDUkrsQ1Vm4tAwmKLhD+iPKGFylSdA1WtK7t+VSLoKh7FxnKRpRFi3eMovT8KmO8Z1XlnBVdeZQLWbYvluNJY3SgI99vG+0mGqcc4/LLGOHWiS0vua+jIJF4d6BKAfjQ6im4SEuVwcDi98aZlaDO7Rg6hjBXCEUydcXOYSgIJHj5OjPXfOG68fp90kT6R3dlHe9X7HvIJNbzzf8ZB+pkYPUQhGJkJJnJfyyZOfpYyq7Qg9KDO0IyrYlSpQ6Fmm75Zv/IDbKW/YKc1pbh/jtbwdCZqLVREDFvLy/V+So8mrtQbX9gquo6zyaAJFak+I6v+XXXa7Wl7SQ23Y=",
    createdAt: "2024-04-27T00:00:00.000Z", // Provide a valid date string
  },
  {
    id: "ce06ed13-fbcb-432a-a8b2-4fb0596e1d56",
    userId: "b257a9e7-389d-45b2-8b42-990fa7c27b2f",
    username: "User3",
    profileImageUrl: "profile_image_url_3",
    location: "Location 3",
    category: "Category 3",
    imageUrl: "image_url_3",
    description: "This is the content of the third post.",
    likesCount: 0,
    comments: 0,
    shares: 0,
    title: "Third Post",
    attachment: "U2FsdGVkX1/lcIs/BA5UHffIoa5qujd189NUbMkkIT78aZY1iCOXNPhseU2nf0bQdydSGMYOTegz72spoAFW+blimYyxPex8b/tzp3SfHOOmVeAvcPnvHr1iEcCzIBAaj6YhtG74yAniF1Fti2ecL4fNm0DniFOiqGHBJe8+pw7q4nBZp5FCOlejVgCnduuUEXiAHNNnecWUa9BD4SgBR7BScz0n7g4zdENq/GLNPMe4ZTPhsE2e6rwMh/U54s4d4dJh1g9KGLCq0Ddx6xaeQbFhEBrhR2ZaJGwF/vvMCnfSyZUlV2svr95HHmUsAqKW/7gygFJ/IZmh3X/WxZMhaSG9rgDZvC438OitQ5OFzOhXcO55xRBemn69Mwzf5kllmEHf0tPcf7kpiLzzqZ5p6bpjyKBuVD3CoQiL+VeVYBMEuiIimmdwob+5vQ9v2+vtJgkwkNqqPleTiMUcbMqp4uHG7knDrRaDj2mAgEgHGjC71E/KQqyCxqsI1in1bTp50OjtLiXjkVJmem7YslRGDzjj7j9noAxK70X6xW3AzHRD/xNQuAi9ptoU47ok+Gi7NlDz6AUaAS4xMwq9+t/3PXN1j9hrQzAAn1NW8lJlnuc7kfvf5B+Wo2CMGAZL2h6PCjFQvXk0EQIgQBxGkMJecIegIIYkKA4QsjTxWLG6nkXFth2gzDJAC5Oqvxw35aVS11tl8cli8kpLtx4Kqusl0vd4RPrg+EXKRTdcYZpJ682cr7xfcdGLA51zNlVeQ/tbDRicYro8c7i6ADeRG51mfMN21KLN5iVr1Ke/Osf13BNIn0+pulJMaTiNMjvz78pBUPdcyYUib+4bP8JlgOlLXJUGr7axEQuRSvDJTpfcqSXKGXJW+B6f91NpsjuLCJ+iFa9ToB6x9kVSogTu2dayFewZ/AtgkIvs0v9MKtzLmQ9Ixq0dxWym1grM70qhag21ayA17vnzCmu14A3NtmX3T5sS6RIgNOPEpuMVPHU6jrE4g+lF3/HEHuvOTBagzpUnqUk81l7wTxYJJ0j1IZCRnHEnJ9hc+2AbezPXoeCXe72+uHoFTscwJ5Sl9wkb/CP0cNhZZOrCgPnowoIxwlSL1BiJgLtrx+etpNfHytcWXNpKOXbIB7yJlBXp5tVsTRzlHjUYrnj/dBfztJX+HcnQv7vrlcoJ01c04PabzBU45/aI1po1fGiMNtgraMJqbG7vABKQ7I12qx7IZOB/Fy+JaB+Kqx9vhRqorxuqbu+tD7pbx8MC/uPLxUsbTTiW5jJvDInIjGPkayDg8Dd7bxW/xO5wyXnHJ7h6BdYddWt3BisTocWzQnwVFHDDOvB+HSThGxrPMScNMXEIi4DYnv5blPP9DclOVrDUkrsQ1Vm4tAwmKLhD+iPKGFylSdA1WtK7t+VSLoKh7FxnKRpRFi3eMovT8KmO8Z1XlnBVdeZQLWbYvluNJY3SgI99vG+0mGqcc4/LLGOHWiS0vua+jIJF4d6BKAfjQ6im4SEuVwcDi98aZlaDO7Rg6hjBXCEUydcXOYSgIJHj5OjPXfOG68fp90kT6R3dlHe9X7HvIJNbzzf8ZB+pkYPUQhGJkJJnJfyyZOfpYyq7Qg9KDO0IyrYlSpQ6Fmm75Zv/IDbKW/YKc1pbh/jtbwdCZqLVREDFvLy/V+So8mrtQbX9gquo6zyaAJFak+I6v+XXXa7Wl7SQ23Y=",
    createdAt: "2024-04-27T00:00:00.000Z", // Provide a valid date string
  },
  {
    id: "3e193ff6-1b86-4513-8032-cb8b0d34f1c5",
    userId: "a50745cd-5b17-4c89-b78c-6ad67ed4e8e4",
    username: "User4",
    profileImageUrl: "profile_image_url_4",
    location: "Location 4",
    category: "Category 4",
    imageUrl: "image_url_4",
    description: "This is the content of the fourth post.",
    likesCount: 0,
    comments: 0,
    shares: 0,
    title: "Fourth Post",
    attachment: "U2FsdGVkX1/lcIs/BA5UHffIoa5qujd189NUbMkkIT78aZY1iCOXNPhseU2nf0bQdydSGMYOTegz72spoAFW+blimYyxPex8b/tzp3SfHOOmVeAvcPnvHr1iEcCzIBAaj6YhtG74yAniF1Fti2ecL4fNm0DniFOiqGHBJe8+pw7q4nBZp5FCOlejVgCnduuUEXiAHNNnecWUa9BD4SgBR7BScz0n7g4zdENq/GLNPMe4ZTPhsE2e6rwMh/U54s4d4dJh1g9KGLCq0Ddx6xaeQbFhEBrhR2ZaJGwF/vvMCnfSyZUlV2svr95HHmUsAqKW/7gygFJ/IZmh3X/WxZMhaSG9rgDZvC438OitQ5OFzOhXcO55xRBemn69Mwzf5kllmEHf0tPcf7kpiLzzqZ5p6bpjyKBuVD3CoQiL+VeVYBMEuiIimmdwob+5vQ9v2+vtJgkwkNqqPleTiMUcbMqp4uHG7knDrRaDj2mAgEgHGjC71E/KQqyCxqsI1in1bTp50OjtLiXjkVJmem7YslRGDzjj7j9noAxK70X6xW3AzHRD/xNQuAi9ptoU47ok+Gi7NlDz6AUaAS4xMwq9+t/3PXN1j9hrQzAAn1NW8lJlnuc7kfvf5B+Wo2CMGAZL2h6PCjFQvXk0EQIgQBxGkMJecIegIIYkKA4QsjTxWLG6nkXFth2gzDJAC5Oqvxw35aVS11tl8cli8kpLtx4Kqusl0vd4RPrg+EXKRTdcYZpJ682cr7xfcdGLA51zNlVeQ/tbDRicYro8c7i6ADeRG51mfMN21KLN5iVr1Ke/Osf13BNIn0+pulJMaTiNMjvz78pBUPdcyYUib+4bP8JlgOlLXJUGr7axEQuRSvDJTpfcqSXKGXJW+B6f91NpsjuLCJ+iFa9ToB6x9kVSogTu2dayFewZ/AtgkIvs0v9MKtzLmQ9Ixq0dxWym1grM70qhag21ayA17vnzCmu14A3NtmX3T5sS6RIgNOPEpuMVPHU6jrE4g+lF3/HEHuvOTBagzpUnqUk81l7wTxYJJ0j1IZCRnHEnJ9hc+2AbezPXoeCXe72+uHoFTscwJ5Sl9wkb/CP0cNhZZOrCgPnowoIxwlSL1BiJgLtrx+etpNfHytcWXNpKOXbIB7yJlBXp5tVsTRzlHjUYrnj/dBfztJX+HcnQv7vrlcoJ01c04PabzBU45/aI1po1fGiMNtgraMJqbG7vABKQ7I12qx7IZOB/Fy+JaB+Kqx9vhRqorxuqbu+tD7pbx8MC/uPLxUsbTTiW5jJvDInIjGPkayDg8Dd7bxW/xO5wyXnHJ7h6BdYddWt3BisTocWzQnwVFHDDOvB+HSThGxrPMScNMXEIi4DYnv5blPP9DclOVrDUkrsQ1Vm4tAwmKLhD+iPKGFylSdA1WtK7t+VSLoKh7FxnKRpRFi3eMovT8KmO8Z1XlnBVdeZQLWbYvluNJY3SgI99vG+0mGqcc4/LLGOHWiS0vua+jIJF4d6BKAfjQ6im4SEuVwcDi98aZlaDO7Rg6hjBXCEUydcXOYSgIJHj5OjPXfOG68fp90kT6R3dlHe9X7HvIJNbzzf8ZB+pkYPUQhGJkJJnJfyyZOfpYyq7Qg9KDO0IyrYlSpQ6Fmm75Zv/IDbKW/YKc1pbh/jtbwdCZqLVREDFvLy/V+So8mrtQbX9gquo6zyaAJFak+I6v+XXXa7Wl7SQ23Y=",
    createdAt: "2024-04-27T00:00:00.000Z", // Provide a valid date string
  },
];
