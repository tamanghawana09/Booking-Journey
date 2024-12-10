<?php
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $date = $data['date'];
    $games = $data['games'];
    $times = $data['times'];

    
    $url = "https://example.com/book/?date={$date}";

    foreach ($games as $game) {
        $gameType = $game['game'];
        $option = $game['option'];
        $url .= "&selected_products[{$gameType}{$option}]=1";
    }

    foreach ($times as $game => $time) {
        $url .= "&zone_times[{$game}]={$time}";
    }

    echo json_encode(['bookingUrl' => $url]);
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
?>
