
<div class="container" style="padding-top: 5%;">

    <div class="col-md-4"></div>
    <div class="col-md-4">
        <?php echo form_error('name','<h4 class="help-block" style="color: red;">','</h4>'); ?>
        <?php echo form_error('conf_password','<h4 class="help-block" style="color: red;">','</h4>'); ?>

        <form action="<?php echo site_url('user/register'); ?>" method="post">
            <div class="form-group">
                <input type="text" class="form-control" name="name" placeholder="Name" required="" value="<?php echo !empty($userData['name'])?$userData['name']:''; ?>">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" name="password" placeholder="Password" required="">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" name="conf_password" placeholder="Confirm password" required="">
            </div>
            <div class="form-group">
                <?php
                if(!empty($userData['permission'])){
                    $permission = $userData['permission'];
                }else{
                    $permission = '';
                }
                ?>
                <div class="register-permission">
                    <input type="radio" name="permission" value="admin"> administrator<br>
                    <input type="radio" name="permission" value="manager" checked> user
                </div>
            </div>
            <div class="form-group">
                <input type="submit" name="registerSubmit" class="btn btn-primary" value="Submit"/>
                <a class="btn btn-warning" href="<?php echo site_url('user/get_users') ?>">Cancel</a>
            </div>
        </form>
    </div>
    <div class="col-md-4"></div>

</div>