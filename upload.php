
<?php
// Set the target directory for uploads
$target_dir = "uploads/";

// Create directory if it doesn't exist
if (!file_exists($target_dir)) {
    mkdir($target_dir, 0777, true);
}

// Get the file extension
$imageFileType = strtolower(pathinfo($_FILES["profile_image"]["name"], PATHINFO_EXTENSION));

// Generate a unique filename
$target_file = $target_dir . "profile_" . time() . "." . $imageFileType;

$uploadOk = 1;
$response = array();

// Check if image file is an actual image
if(isset($_POST["submit"]) || true) {
    $check = getimagesize($_FILES["profile_image"]["tmp_name"]);
    if($check !== false) {
        $uploadOk = 1;
    } else {
        $response["error"] = "File is not an image.";
        $uploadOk = 0;
    }
}

// Check file size (5MB max)
if ($_FILES["profile_image"]["size"] > 5000000) {
    $response["error"] = "Sorry, your file is too large. Max size is 5MB.";
    $uploadOk = 0;
}

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    $response["error"] = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    $response["status"] = "error";
    // If everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["profile_image"]["tmp_name"], $target_file)) {
        $response["status"] = "success";
        $response["file"] = $target_file;
        
        // Create a session to store the file path
        session_start();
        $_SESSION["profile_image"] = $target_file;
    } else {
        $response["status"] = "error";
        $response["error"] = "Sorry, there was an error uploading your file.";
    }
}

// Redirect back to profile page
header("Location: profile.html");
exit();
?>
