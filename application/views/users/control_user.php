<div class="container" style="padding-top: 3%;">

    <div class="row" style="padding: 1% 1% 1% 1%;">
        <div class="col-md-7">
            <a href="<?php echo site_url('user/register');?>"><button class="btn btn-success" > Add User </button></a>
            <button type="button" class="btn btn-danger" id="delete-user-modal" data-toggle="modal" data-target="#deleteUserLine" disabled> Delete User </button>
            <button type="button" class="btn btn-primary" id="uploadFiles-modal" data-toggle="modal" data-target="#uploadUserLine" disabled> Upload Files </button>
        </div>
    </div>
    <!-- Upload Files Modal -->
    <div class="modal fade" id="uploadUserLine" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header" style="background-color: orange">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h3 class="modal-title">Upload Files</h3>
                </div>
                <form method="post" action="<?php echo site_url('user/uploadFiles'); ?>" enctype="multipart/form-data">
                    <div class="modal-body">
                        <h4> You can upload files </h4>
                        <h5 id="uploadFiles-user-name-text" style="color: darkmagenta"></h5>
                        <input id="uploadFiles-user-id" name="uploadFiles-user-id" style="display: none"><br>
                        <span style="color: blue;">Select Disk File </span><input type="file" name="diskFile"><br>
                        <span style="color: blue;">Select ScreenSaver File </span><input type="file" name="screenSaverFile">
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-info" name="delete-user-button"> Upload </button>
                        <button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
    <!-- Delete User Modal -->
    <div class="modal fade" id="deleteUserLine" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header" style="background-color: orange">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h3 class="modal-title">Delete User</h3>
                </div>
                <form method="post" action="<?php echo site_url('user/delete_user'); ?>">
                    <div class="modal-body">
                        <h4> Do you agree to delete this user? </h4>
                        <h5 id="user-id-text" style="color: darkmagenta"></h5>
                        <h5 id="user-name-text" style="color: darkmagenta"></h5>
                        <h5 id="user-permission-text" style="color: darkmagenta"></h5>
                        <input id="delete-user-id" name="delete-user-id" style="display: none">
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-info" name="delete-user-button"> Delete </button>
                        <button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
    <div class="control-table">
        <table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%">
            <thead>
            <tr>
                <th> UserID </th>
                <th> UserName </th>
                <th> Permission </th>
                <th> Disk </th>
                <th> ScreenSaver </th>
            </tr>
            </thead>
            <tbody>
            <?php
            foreach ($user_data as $user_line){
            ?><tr id="user-line<?php echo $user_line->id; ?>" onclick='edit_user_line(<?php echo json_encode($user_line); ?>, <?php echo json_encode($user_data); ?>)'><td><?php echo $user_line->id;?></td><td><?php echo $user_line->name;?></td><td><?php
                    if ($user_line->permission == "admin") echo "administrator";
                    else echo "user"; ?></td><td><?php
                    if ($user_line->disk == null || $user_line->disk == "") echo "Empty";
                    else echo "Uploaded"; ?></td><td><?php
                    if ($user_line->screensaver == null || $user_line->screensaver == "") echo "Empty";
                    else echo "Uploaded"; ?></td></tr><?php
                }
                ?>
            </tbody>
        </table>
    </div>
</div>