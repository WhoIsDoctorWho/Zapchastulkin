import { Component, Output, EventEmitter } from '@angular/core';
import { FileService } from '../services/file.service';

@Component({
    selector: "get-image",
    templateUrl: './get-image.component.html',
    providers: [FileService]
})
export class GetImageComponent {

    @Output() filepathOutput = new EventEmitter<string>();
    

    constructor(private fileService: FileService) { }

    onFileSelected(event) {
        const f: File = <File>event.target.files[0];
        const fd : FormData = new FormData();
        fd.append('image', f, f.name);        
        this.fileService.uploadPhoto(fd).subscribe(data => {
            this.filepathOutput.emit(data.toString());
        });
    }
}