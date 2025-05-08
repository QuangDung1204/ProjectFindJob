package vn.minhtri.jobhunter.controller;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.turkraft.springfilter.boot.Filter;
import jakarta.validation.Valid;
import vn.minhtri.jobhunter.domain.Permission;
import vn.minhtri.jobhunter.domain.response.ResultPaginationDTO;
import vn.minhtri.jobhunter.service.PermissionService;
import vn.minhtri.jobhunter.util.annotation.ApiMessage;
import vn.minhtri.jobhunter.util.error.IdInvalidException;

@RestController
@RequestMapping("/api/v1")
public class PermissionController {

    private final PermissionService permissionService;

    public PermissionController(PermissionService permissionService) {
        this.permissionService = permissionService;
    }

    @PostMapping("/permissions")
    @ApiMessage("Tạo mới chức vụ")
    public ResponseEntity<Permission> create(@Valid @RequestBody Permission p) throws IdInvalidException {
        // check exist
        if (this.permissionService.isPermissionExist(p)) {
            throw new IdInvalidException("Permission đã tồn tại.");
        }

        // create new permission
        return ResponseEntity.status(HttpStatus.CREATED).body(this.permissionService.create(p));
    }

    @PutMapping("/permissions")
    @ApiMessage("Cập nhật chức vụ")
    public ResponseEntity<Permission> update(@Valid @RequestBody Permission p) throws IdInvalidException {

        if (this.permissionService.fetchById(p.getId()) == null) {
            throw new IdInvalidException("Permission với id = " + p.getId() + " không tồn tại.");
        }

        if (this.permissionService.isPermissionExist(p)) {

            if (this.permissionService.isSameName(p)) {
                throw new IdInvalidException("Permission đã tồn tại.");
            }
        }

        return ResponseEntity.ok().body(this.permissionService.update(p));
    }

    @DeleteMapping("/permissions/{id}")
    @ApiMessage("delete a permission")
    public ResponseEntity<Void> delete(@PathVariable("id") long id) throws IdInvalidException {

        if (this.permissionService.fetchById(id) == null) {
            throw new IdInvalidException("Permission với id = " + id + " không tồn tại.");
        }
        this.permissionService.delete(id);
        return ResponseEntity.ok().body(null);
    }

    @GetMapping("/permissions")
    @ApiMessage("Fetch permissions")
    public ResponseEntity<ResultPaginationDTO> getPermissions(
            @Filter Specification<Permission> spec, Pageable pageable) {

        return ResponseEntity.ok(this.permissionService.getPermissions(spec, pageable));
    }
}
