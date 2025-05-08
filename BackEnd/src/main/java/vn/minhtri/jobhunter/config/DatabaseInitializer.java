package vn.minhtri.jobhunter.config;

import java.util.ArrayList;
import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import vn.minhtri.jobhunter.domain.Permission;
import vn.minhtri.jobhunter.domain.Role;
import vn.minhtri.jobhunter.domain.User;
import vn.minhtri.jobhunter.repository.PermissionRepository;
import vn.minhtri.jobhunter.repository.RoleRepository;
import vn.minhtri.jobhunter.repository.UserRepository;
import vn.minhtri.jobhunter.util.constant.GenderEnum;

@Service
public class DatabaseInitializer implements CommandLineRunner {

    private final PermissionRepository permissionRepository;
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public DatabaseInitializer(
            PermissionRepository permissionRepository,
            RoleRepository roleRepository,
            UserRepository userRepository,
            PasswordEncoder passwordEncoder) {
        this.permissionRepository = permissionRepository;
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {
        long countPermissions = this.permissionRepository.count();
        long countRoles = this.roleRepository.count();
        long countUsers = this.userRepository.count();

        if (countPermissions == 0) {
            ArrayList<Permission> arr = new ArrayList<>();
            arr.add(new Permission("Tạo mới 1 công ty", "/api/v1/companies", "POST", "COMPANIES"));
            arr.add(new Permission("Cập nhật 1 công ty", "/api/v1/companies", "PUT", "COMPANIES"));
            arr.add(new Permission("Xóa một công ty", "/api/v1/companies/{id}", "DELETE", "COMPANIES"));
            arr.add(new Permission("Lấy 1 công ty theo id", "/api/v1/companies/{id}", "GET", "COMPANIES"));
            arr.add(new Permission("Lấy các công ty có phân trang", "/api/v1/companies", "GET", "COMPANIES"));

            arr.add(new Permission("Tạo một công việc", "/api/v1/jobs", "POST", "JOBS"));
            arr.add(new Permission("Cập nhật một công việc", "/api/v1/jobs", "PUT", "JOBS"));
            arr.add(new Permission("Xóa một công việc", "/api/v1/jobs/{id}", "DELETE", "JOBS"));
            arr.add(new Permission("Lấy công việc theo id", "/api/v1/jobs/{id}", "GET", "JOBS"));
            arr.add(new Permission("Phân trang danh sách công việc", "/api/v1/jobs", "GET", "JOBS"));

            arr.add(new Permission("Tạo mới một quyền hạn", "/api/v1/permissions", "POST", "PERMISSIONS"));
            arr.add(new Permission("Cập nhật quyền hạn", "/api/v1/permissions", "PUT", "PERMISSIONS"));
            arr.add(new Permission("Xóa một quyền hạn", "/api/v1/permissions/{id}", "DELETE", "PERMISSIONS"));
            arr.add(new Permission("Lấy 1 quyền hạn", "/api/v1/permissions/{id}", "GET", "PERMISSIONS"));
            arr.add(new Permission("Phân trang quyền hạn", "/api/v1/permissions", "GET", "PERMISSIONS"));

            arr.add(new Permission("Tạo một CV", "/api/v1/resumes", "POST", "RESUMES"));
            arr.add(new Permission("Cập nhật CV", "/api/v1/resumes", "PUT", "RESUMES"));
            arr.add(new Permission("Xóa một CV", "/api/v1/resumes/{id}", "DELETE", "RESUMES"));
            arr.add(new Permission("Lấy 1 CV", "/api/v1/resumes/{id}", "GET", "RESUMES"));
            arr.add(new Permission("Phân trang CV", "/api/v1/resumes", "GET", "RESUMES"));

            arr.add(new Permission("Tạo một vai trò", "/api/v1/roles", "POST", "ROLES"));
            arr.add(new Permission("Cập nhật vai trò", "/api/v1/roles", "PUT", "ROLES"));
            arr.add(new Permission("Xóa một vai trò", "/api/v1/roles/{id}", "DELETE", "ROLES"));
            arr.add(new Permission("Xóa một vai trò theo ID", "/api/v1/roles/{id}", "GET", "ROLES"));
            arr.add(new Permission("Phân trang vai trò", "/api/v1/roles", "GET", "ROLES"));

            arr.add(new Permission("Tạo mới người dùng", "/api/v1/users", "POST", "USERS"));
            arr.add(new Permission("Cập nhật người dùng", "/api/v1/users", "PUT", "USERS"));
            arr.add(new Permission("Xóa một người dùng", "/api/v1/users/{id}", "DELETE", "USERS"));
            arr.add(new Permission("Xóa người dùng theo Id", "/api/v1/users/{id}", "GET", "USERS"));
            arr.add(new Permission("Phân trang người dùng", "/api/v1/users", "GET", "USERS"));

            arr.add(new Permission("Tạo mới đăng kí", "/api/v1/subscribers", "POST", "SUBSCRIBERS"));
            arr.add(new Permission("Cặp nhật đăng kí kỹ năng", "/api/v1/subscribers", "PUT", "SUBSCRIBERS"));
            arr.add(new Permission("Xóa đăng kí kỹ năng", "/api/v1/subscribers/{id}", "DELETE", "SUBSCRIBERS"));
            arr.add(new Permission("Nhận một kỹ năng", "/api/v1/subscribers/{id}", "GET", "SUBSCRIBERS"));
            arr.add(new Permission("Phân trang kỹ năng", "/api/v1/subscribers", "GET", "SUBSCRIBERS"));

            arr.add(new Permission("Tải xuống 1 file", "/api/v1/files", "POST", "FILES"));
            arr.add(new Permission("Upload 1 file", "/api/v1/files", "GET", "FILES"));

            this.permissionRepository.saveAll(arr);
        }

        if (countRoles == 0) {
            List<Permission> allPermissions = this.permissionRepository.findAll();

            Role adminRole = new Role();
            adminRole.setName("SUPER_ADMIN");
            adminRole.setDescription("Admin thì full permissions");
            adminRole.setActive(true);
            adminRole.setPermissions(allPermissions);

            this.roleRepository.save(adminRole);
        }

        if (countUsers == 0) {
            User adminUser = new User();
            adminUser.setEmail("admin@gmail.com");
            adminUser.setAddress("hn");
            adminUser.setAge(25);
            adminUser.setGender(GenderEnum.MALE);
            adminUser.setName("I'm super admin");
            adminUser.setPassword(this.passwordEncoder.encode("123456"));

            Role adminRole = this.roleRepository.findByName("SUPER_ADMIN");
            if (adminRole != null) {
                adminUser.setRole(adminRole);
            }

            this.userRepository.save(adminUser);
        }

        if (countPermissions > 0 && countRoles > 0 && countUsers > 0) {
            System.out.println(">>> SKIP INIT DATABASE ~ ALREADY HAVE DATA...");
        } else
            System.out.println(">>> END INIT DATABASE");
    }

}
