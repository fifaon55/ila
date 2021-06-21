
jQuery(document).ready(function($){

	var list_qa = [
	{
		question: "Ba mẹ có nên cho trẻ học tiếng Anh sớm tại ILA?",
		answer: "Có. Tầm quan trọng của tiếng Anh đối với trẻ em là cực kỳ lớn. Từ 6-11 tuổi là giai đoạn vàng trong quá trình phát triển ngôn ngữ cho trẻ, khi mà não bộ và các cơ quan nghe - phát âm của trẻ vẫn đang trong quá trình hoàn thiện. Đây là giai đoạn tốt nhất để trẻ có thể hình thành phản xạ tiếng Anh như người bản xứ.<br><br>Bé học tiếng Anh từ sớm với chương trình Anh văn thiếu nhi chuẩn quốc tế, chuyên biệt cho từng độ tuổi tại ILA sẽ sở hữu khả năng phản xạ tiếng Anh linh hoạt, cùng rất nhiều lợi thế khác như: <br><br>- Nghe - phát âm chuẩn ngay từ nhỏ.<br><br>- Tự tin hơn khi giao tiếp.<br><br>- Mở rộng kiến thức và hiểu biết văn hóa.<br><br>- Phát triển não bộ và tư duy."
	},
	{
		question: "Tại sao cách dạy tiếng Anh cho bé tại ILA hiệu quả?",
		answer: "Hiểu rõ tâm lý năng động, dễ phân tâm của trẻ nhỏ, chương trình học tiếng Anh cho trẻ mới bắt đầu của ILA được thiết kế với những kiến thức và hoạt động trên lớp phù hợp với tính cách của trẻ, từ đó trẻ có hứng thú và yêu thích việc học hơn.<br><br>Thông qua việc học tiếng Anh tại ILA, trẻ sẽ học giỏi tiếng Anh mà không bị áp lực thành tích. Trẻ học từ vựng tiếng Anh hiệu quả thông qua các hoạt động phù hợp với lứa tuổi như học tiếng Anh qua hình ảnh, qua truyện kể. Những chủ đề học tiếng Anh cho bé cũng được chọn lọc để giúp bé khám phá thế giới bằng chính ngôn ngữ tiếng Anh mà bé đang học."
	},
	{
		question: "Tại sao ILA cho trẻ lợi thế khi tham gia thi các kỳ thi lấy chứng chỉ tiếng Anh Cambridge cho trẻ em?",
		answer: "Là một trong số ít trung tâm tiếng Anh được ủy quyền tổ chức các kỳ thi chứng chỉ tiếng Anh Cambridge tại Việt Nam, ILA mang đến chất lượng giảng dạy và đào tạo Anh ngữ chuẩn quốc tế. Chương trình học giúp trẻ trang bị những kiến thức và kỹ năng cần thiết để sẵn sàng tham gia những kỳ thi Cambridge thực tế. Trẻ có thể đăng ký tham gia những kỳ thi lấy chứng chỉ tiếng Anh cho trẻ em phù hợp với độ tuổi của mình, cụ thể:<br><br>- Chứng chỉ STARTERS<br><br>- Chứng chỉ MOVERS<br><br>- Chứng chỉ FLYERS<br><br>- Chứng chỉ KET<br><br>- Chứng chỉ PET<br><br>- Chứng chỉ FCE<br><br>- Chứng chỉ CAE<br><br>- Chứng chỉ IELTS"
	},
	{
		question: "Lợi ích của Chứng chỉ Cambridge cho trẻ em là gì?",
		answer: "Chứng chỉ Cambridge, cũng như quá trình luyện thi chứng chỉ Cambridge mang lại cho trẻ những lợi ích vô cùng to lớn, có thể kế đến như:<br><br>- Phát triển cả 4 kỹ năng tiếng Anh, phục vụ trực tiếp cho thực tế cuộc sống và những dự định tương lai cho con của bố mẹ, chẳng hạn như học trường quốc tế, du học hay thi chứng chỉ tiếng Anh để vào lớp tăng cường.<br><br>- Có nhiều trình độ rõ ràng, phục vụ từng mục đích cho người học<br><br>- Chứng chỉ Cambridge có thời hạn vĩnh viễn<br><br>- Được chấp nhận rộng rãi trong giáo dục, công việc, nhập cư trên toàn thế giới, trẻ sẵn sàng hành trang trở thành một công dân toàn cầu trong tương lai.<br><br>- Những kỳ thi Cambridge luôn bảo mật, đáng tin cậy, công bằng, từ đó khuyến khích trẻ học tiếng Anh<br><br>- Giúp phụ huynh thấy được sự tiến bộ của con trong việc học tiếng Anh, từ đó, chủ động dạy bé học tiếng Anh theo chủ đề cần thiết."
	},
	{
		question: "Trung tâm tiếng Anh ILA ở đâu?",
		answer: "Với 20 năm kinh nghiệm đào tạo tài năng trẻ, ILA tự hào là một trong những trung tâm tiếng Anh trẻ em tốt nhất hiện nay. Phụ huynh không cần phải băn khoăn với câu hỏi “nên cho bé học tiếng Anh ở đâu” hay “học tiếng Anh trẻ em ở đâu tốt”, bởi ILA hiện có 43 trung tâm tại 12 thành phố trên toàn quốc. Với giáo trình tiếng Anh cho trẻ em chuẩn quốc tế được cập nhật thường xuyên, ILA chính là trung tâm tiếng Anh trẻ em tốt nhất và thuận tiện nhất để ba mẹ cho con theo học."
	},
	{
		question: "Đăng ký cho trẻ học tại ILA như thế nào?",
		answer: " Với hệ thống tư vấn viên chuyên nghiệp, phụ huynh không phải lo lắng khi muốn đăng ký cho con học tại ILA. Khi để lại thông tin liên hệ, các tư vấn viên giáo dục sẽ liên hệ  và tư vấn chi tiết về học phí, lộ trình học tương ứng với năng lực của trẻ.<br><br>Trẻ sẽ được kiểm tra trình độ tiếng Anh hoàn toàn miễn phí. Đặc biệt, các bài kiểm tra trình độ tiếng Anh được thực hiện bởi giáo viên bản ngữ, nhờ đó, phụ huynh biết được thực lực của con một cách đúng nhất để đưa ra quyết định phù hợp. Bài kiểm tra đầu vào tiếng Anh này còn giúp xác định cấp độ lớp học phù hợp để trẻ cải thiện khả năng tiếng Anh nhanh nhất. <br><br>Ngoài ra, ILA hiện đang có chương trình học thử MIỄN PHÍ và học bổng đến 25% cho học viên mới."
	},


	];
	var accordion = $('#accordion');

	for (var i = 0; i < list_qa.length; i++) {
		let html = '<div class="card">';
		html += '<div class="card-header" id="heading-'+i+'">';
		html += '<h2 class="mb-0 h5">';
		html += '<button class="btn btn-link" data-toggle="collapse" data-target="#collapse-'+i+'" aria-expanded="true" aria-controls="collapse-'+i+'">';
		html += '<img src="./uploads/down.png">';

		html +=  list_qa[i].question;
		html += '</button>';
		html += '</h2>';
		html += '</div>';

		html += '<div id="collapse-'+i+'" class="collapse" aria-labelledby="heading-'+i+'" data-parent="#accordion">';
		html += '<div class="card-body">';
		html +=  list_qa[i].answer;
		html += '</div>';
		html += '</div>';
		html += '</div>';
		accordion.append(html);
	}


	$('#accordion .btn').on('click',function(){
		if($(this).hasClass('showing')){
			$(this).find('img').attr('src','uploads/down.png')
			$(this).removeClass('showing');

		}else{
			$('#accordion .btn').removeClass('showing');
			$('#accordion .btn').find('img').attr('src','uploads/down.png');
			$(this).addClass('showing');
			$(this).find('img').attr('src','uploads/up.png')
		}
	})


	
	var collapseH = $('#accordion').outerHeight();
	var formH = $('#section-qa .form-ila').outerHeight();
	if(collapseH > formH){
		$('#accordion').outerHeight(formH);
	}

});

